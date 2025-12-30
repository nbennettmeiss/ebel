
import React, { useState, useRef, useEffect } from 'react';
import { getConciergeResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const WatchConcierge: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to EBEL. I am your Virtual Concierge. How may I assist you in discovering our architectural timepieces today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await getConciergeResponse(userMessage, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="concierge" className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 italic">Personal Concierge</h2>
          <p className="text-gray-500 uppercase tracking-widest text-sm">Experience Personalized Horology</p>
        </div>

        <div className="bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col h-[600px] border border-stone-100">
          <div className="bg-[#1a1a1a] p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm uppercase tracking-widest font-light">Ebel Assistant - Online</span>
            </div>
            <span className="text-xs text-gray-400">Swiss Engineered AI</span>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-amber-50 text-amber-900 border border-amber-100' 
                    : 'bg-stone-100 text-stone-800 border border-stone-200'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-100 p-4 rounded-lg flex space-x-2">
                  <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-stone-100 bg-stone-50">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our collections, heritage, or recommendations..."
                className="w-full bg-white border border-stone-200 px-6 py-4 rounded-full pr-16 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full hover:bg-amber-700 transition-colors disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-400 mt-3 uppercase tracking-widest">
              Exclusive Virtual Assistance for Ebel Clients
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WatchConcierge;
