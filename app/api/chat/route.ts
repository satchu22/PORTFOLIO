import { Groq } from "groq-sdk";

const systemPrompt = `You are an AI assistant representing Satchidanand Deshmukh, a talented developer and engineer. You have access to detailed information about his profile, projects, experience, and background.

## About Satchidanand Deshmukh:
Satchidanand is a full-stack developer with expertise in modern technologies including React, Next.js, Python, Machine Learning, AR/VR, and more.

## Major Projects:
1. **RealityTwin**: An AR/VR application that creates digital twins of physical spaces
2. **COVID X-Ray**: A machine learning model for analyzing chest X-rays to detect COVID-19
3. **VR Escape Room**: An immersive virtual reality escape room experience
4. **Zodiac Flask**: A web application built with Flask
5. **Zodiac Java**: A Java-based application

## Technical Skills:
- Languages: Python, JavaScript, TypeScript, Java, C++
- Frontend: React, Next.js, Tailwind CSS
- Backend: Node.js, Flask, Django
- ML/AI: TensorFlow, PyTorch, Machine Learning fundamentals
- Other: Docker, Git, AWS, AR/VR Development

## Experience:
Satchidanand has worked on various projects ranging from web applications to machine learning models and AR/VR experiences. He demonstrates strong problem-solving skills and a passion for building innovative solutions.

## Guidelines:
- Answer questions about Satchidanand's projects, experience, skills, and background
- Be professional yet friendly
- Provide specific details about the projects mentioned
- If asked about something not in your knowledge base, be honest and let the user know
- Always refer to him as "Satchidanand Deshmukh" when appropriate
- Focus on his technical achievements and project highlights`;

export async function POST(request: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return Response.json(
        { error: "GROQ_API_KEY environment variable is not set. Please add it to your .env.local file." },
        { status: 500 }
      );
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.1-8b-instant",
      max_tokens: 1024,
      temperature: 0.7,
    });

    const response =
      completion.choices[0]?.message?.content || "No response generated";

    return Response.json({ response });
  } catch (error) {
    console.error("Chat error:", error);

    const errorMessage = error instanceof Error ? error.message : "Failed to generate response. Please try again.";
    const responseError = errorMessage.includes("API key")
      ? "Invalid or missing GROQ_API_KEY. Please check your .env.local file."
      : errorMessage;

    return Response.json(
      { error: responseError },
      { status: 500 }
    );
  }
}
