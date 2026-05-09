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

const fallbackResponses = [
  {
    keywords: ["experience", "background", "work history", "career"],
    response:
      "Satchidanand Deshmukh is a full-stack developer with experience across frontend, backend, AI, and cloud technologies. He has built projects in React, Next.js, Python, Flask, and AR/VR, and his portfolio demonstrates practical work in machine learning, web development, and system design.",
  },
  {
    keywords: ["realitytwin", "digital twin", "ar/vr"],
    response:
      "RealityTwin is an AR/VR application that creates digital twins of physical spaces. It focuses on immersive visualization, simulation, and real-world system modeling.",
  },
  {
    keywords: ["covid", "x-ray", "covid x-ray"],
    response:
      "COVID X-Ray is a machine learning project for analyzing chest X-rays to detect COVID-19. It combines image processing and model inference to support diagnostic predictions.",
  },
  {
    keywords: ["vr escape room", "escape room", "vr"],
    response:
      "The VR Escape Room is an immersive virtual reality experience built to demonstrate interaction design, 3D environment handling, and user-driven game logic.",
  },
  {
    keywords: ["zodiac flask", "flask", "zodiac"],
    response:
      "Zodiac Flask is a web application built with Flask that handles zodiac sign logic and user interaction via a web interface.",
  },
  {
    keywords: ["zodiac java", "java"],
    response:
      "Zodiac Java is a Java-based application demonstrating backend programming and application logic for zodiac calculations.",
  },
  {
    keywords: ["github", "linked in", "linkedin", "profile"],
    response:
      "Please check Satchidanand's GitHub at https://github.com/satchu22 and his LinkedIn at https://www.linkedin.com/in/satchidanand22199/ for the most accurate and current project and profile details.",
  },
];

function getStaticResponse(message: string) {
  const normalized = message.toLowerCase();

  for (const item of fallbackResponses) {
    if (item.keywords.some((keyword) => normalized.includes(keyword))) {
      return `AI is currently unavailable. ${item.response}`;
    }
  }

  return (
    "AI is currently unavailable. Please try again later or ask a different question about Satchidanand's portfolio, resume, GitHub, or LinkedIn."
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({ message: "" }));
  const message = typeof body.message === "string" ? body.message : "";

  if (!message.trim()) {
    return Response.json(
      { error: "Message is required" },
      { status: 400 }
    );
  }

  if (!process.env.GROQ_API_KEY) {
    return Response.json(
      { response: getStaticResponse(message), fallback: true },
      { status: 200 }
    );
  }

  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

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

    return Response.json({ response, fallback: false });
  } catch (error) {
    console.error("Chat error:", error);

    return Response.json(
      {
        response: getStaticResponse(message),
        fallback: true,
        error:
          error instanceof Error
            ? error.message
            : "Failed to generate response. Please try again.",
      },
      { status: 200 }
    );
  }
}
