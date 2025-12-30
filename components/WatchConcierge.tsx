
import React, { useState, useRef, useEffect } from 'react';
import { getConciergeResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const WatchConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to EBEL. I am your personal concierge. How may I assist you in discovering your perfect timepiece today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getConciergeResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] bg-amber-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-amber-700 transition-all duration-300 group"
      >
        {isOpen ? (
          <span className="text-2xl">×</span>
        ) : (
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-tighter mb-0.5">EBEL</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        )}
        <div className="absolute -top-12 right-0 bg-white text-black text-[10px] py-1 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest pointer-events-none">
          Talk to Concierge
        </div>
      </button>

      {/* Concierge Panel */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-white z-[55] shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-8 border-b border-stone-100 bg-stone-50">
            <h3 className="text-2xl font-serif">Concierge</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700 mt-2 font-semibold">Architects of Time</p>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-lg ${
                  msg.role === 'user' 
                  ? 'bg-amber-50 text-stone-800 rounded-br-none border border-amber-100' 
                  : 'bg-white text-stone-600 font-light rounded-bl-none italic'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-50 p-4 rounded-lg animate-pulse">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-8 border-t border-stone-100">
            <div className="flex items-center space-x-4">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about a collection..."
                className="flex-1 bg-stone-50 border-none py-3 px-4 focus:ring-1 focus:ring-amber-500 focus:outline-none text-sm placeholder:italic"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-stone-900 text-white p-3 hover:bg-amber-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-stone-400 mt-4 text-center uppercase tracking-widest">EBEL Service Clientèle</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[50] transition-opacity"
        />
      )}
    </>
  );
};

export default WatchConcierge;
