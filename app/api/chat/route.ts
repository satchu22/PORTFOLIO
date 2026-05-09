import { Groq } from "groq-sdk";

const systemPrompt = `You are an AI assistant for Satchidanand Deshmukh. You should answer using only information from his portfolio, resume, GitHub profile (https://github.com/satchu22), and LinkedIn profile (https://www.linkedin.com/in/satchidanand22199/). Do not invent projects, certifications, roles, or technical details beyond these sources.

## About Satchidanand Deshmukh:
Satchidanand is a full-stack developer with experience across frontend, backend, AI, and cloud technologies.

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
- ML/AI: TensorFlow, PyTorch, machine learning fundamentals
- Cloud and DevOps: AWS, Docker, Git

## Certifications:
- Only mention certifications if they are available on his resume, GitHub, or LinkedIn.
- If certifications are not clearly listed in those sources, respond: "I do not have enough information to confirm any certifications from Satchidanand's resume, GitHub, or LinkedIn profiles."

## Guidelines:
- Answer questions about Satchidanand's projects, experience, certifications, and technical skills.
- Use only the information in the portfolio/resume and the GitHub/LinkedIn sources above.
- If the question is outside this information, say you do not have enough data to answer.
- Do not add extra information beyond the sources listed.
- Keep answers professional and focused on his real experience.`;

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
