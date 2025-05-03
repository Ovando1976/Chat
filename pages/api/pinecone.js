// pages/api/pinecone.js
import { PineconeClient } from "@pinecone-database/pinecone";

export default async function handler(req, res) {
  const pinecone = new PineconeClient();
  await pinecone.init({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENV,
  });

  const index = pinecone.Index("my-index");

  if (req.method === "POST") {
    const { text } = req.body;

    // Example: create an embedding using OpenAI
    const embeddingResponse = await fetch(
      "https://api.openai.com/v1/embeddings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-embedding-ada-002",
          input: text,
        }),
      }
    );
    const embeddingData = await embeddingResponse.json();
    const [vector] = embeddingData.data[0].embedding;

    // Upsert into Pinecone
    await index.upsert({
      upsertRequest: {
        vectors: [{ id: "unique-id", values: vector, metadata: { text } }],
      },
    });

    return res.status(200).json({ message: "Vector upserted", vector });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
