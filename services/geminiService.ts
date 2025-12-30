import { GoogleGenAI } from "@google/genai";
import { WATCHES } from "../constants";

const SYSTEM_INSTRUCTION = `You are the EBEL Virtual Concierge, an expert in fine Swiss watchmaking. 
Your tone is sophisticated, welcoming, and highly knowledgeable. 
EBEL was founded in 1911 by Eugene Blum and Alice Levy (The 'E' and 'B' in EBEL). 
They are known as "The Architects of Time".

Information about current collection:
${JSON.stringify(WATCHES, null, 2)}

Instructions:
1. Be helpful and elegant.
2. If asked about prices or specs, refer to the collection data provided.
3. Emphasize the "Architects of Time" heritage.
4. Keep responses concise but luxurious.`;

export async function getConciergeResponse(userMessage: string, history: {role: 'user' | 'model', text: string}[]) {
  try {
    // Creamos la instancia justo antes de la llamada para asegurar que el API_KEY esté actualizado
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-3-flash-preview';
    
    const contents = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));
    
    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I apologize, I am momentarily unavailable to assist you. How else may I help with your EBEL inquiry?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our concierge service is currently experiencing high demand. Please feel free to explore our collections in the meantime.";
  }
}