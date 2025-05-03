import { useState } from "react";
import styles from "../styles/TourGuide.module.css"; // Create a custom CSS file for styles

export default function TourGuide() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("/api/tour-guide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAnswer(data.answer);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setAnswer("Sorry, something went wrong.");
        setLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AI Tour Guide for USVI</h1>
      <p className={styles.description}>
        Ask me anything about the US Virgin Islands (e.g., best beaches, hiking
        trails, historical sites).
      </p>

      <form onSubmit={handleAskQuestion} className={styles.form}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question..."
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Asking..." : "Ask Tour Guide"}
        </button>
      </form>

      {answer && (
        <div className={styles.answer}>
          <h2>Tour Guide Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
