// pages/api/gpt.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt } = req.body;
    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt,
          max_tokens: 100,
        }),
      });
      const data = await response.json();
      return res.status(200).json({ text: data.choices[0].text });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
