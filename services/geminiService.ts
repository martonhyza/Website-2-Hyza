
import { GoogleGenAI, Type } from "@google/genai";

// Safe access to process.env to prevent crashes on static hosts like Vercel/Hostinger
const getApiKey = () => {
  try {
    return (typeof process !== 'undefined' && process.env?.API_KEY) || '';
  } catch {
    return '';
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export const getOperationalAudit = async (bottleneck: string) => {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.error("API Key missing. Audit cannot be performed.");
    return {
      strategy: "System offline. Please configure API credentials to receive a custom strategic analysis.",
      priority: "CRITICAL",
      potentialImpact: "N/A"
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a professional strategic analysis for a gym owner facing this operational bottleneck: "${bottleneck}". Provide a concise, high-impact assessment.`,
      config: {
        systemInstruction: "You are a senior strategic operations consultant for HyzaLabs. You specialize in gym automation and business efficiency. Your tone is confident, direct, and non-hyped. You identify where AI agents can specifically replace manual labor or improve retention.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strategy: { type: Type.STRING, description: "A high-level strategic approach to solving the problem." },
            priority: { type: Type.STRING, description: "Whether this is a high, medium, or low priority fix." },
            potentialImpact: { type: Type.STRING, description: "The business result expected from solving this." }
          },
          required: ["strategy", "priority", "potentialImpact"]
        }
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Audit failed:", error);
    return null;
  }
};
