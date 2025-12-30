
import { GoogleGenAI } from "@google/genai";
import { WATCHES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the EBEL Virtual Concierge, a highly sophisticated, polite, and knowledgeable horology expert. 
Your goal is to help customers find the perfect EBEL watch.
EBEL is known as "The Architects of Time". 

Available Collection:
${WATCHES.map(w => `- ${w.name}: ${w.description}. Collection: ${w.collection}. Price: ${w.price}`).join('\n')}

Guidelines:
1. Always be elegant, professional, and slightly formal.
2. Recommend specific watches from the collection based on the user's needs (e.g., "I'm looking for a gift", "I want something gold", "I need a professional watch").
3. Mention EBEL's heritage (founded in 1911 in La Chaux-de-Fonds, Switzerland).
4. Keep responses concise but luxurious.
5. If asked about prices, use the ones provided in the collection.
6. Address the user as "Monsieur" or "Madame" if appropriate or simply "valued guest".
`;

export const getConciergeResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    
    return response.text || "I apologize, I am currently unable to assist you. Please try again in a moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am experiencing technical difficulties with our Swiss servers. Please allow me a moment to recover.";
  }
};
