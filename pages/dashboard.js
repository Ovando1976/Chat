import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Instead of using document.getElementById, store question in state
  const [tourQuestion, setTourQuestion] = useState("");
  const [tourAnswer, setTourAnswer] = useState("");
  const [knowledgeQuestion, setKnowledgeQuestion] = useState("");
  const [knowledgeAnswer, setKnowledgeAnswer] = useState("");

  const handleSendMessage = (event) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      setMessages((prev) => [...prev, event.target.value]);
      event.target.value = "";
    }
  };

  const handleTourQuestion = () => {
    // Replace with actual API call logic
    setTourAnswer(`Answer to: ${tourQuestion}`);
  };

  const handleKnowledgeQuestion = () => {
    // Replace with actual API call logic
    setKnowledgeAnswer(`Answer to: ${knowledgeQuestion}`);
  };

  // Theming
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Next.js SSR guard recommended, but for demonstration:
    if (typeof document !== "undefined") {
      document.body.classList.toggle("dark-mode", !darkMode);
    }
  };

  return (
    <div className={darkMode ? styles.darkContainer : styles.container}>
      <Head>
        <title>USVI Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>USVI Explorer</h1>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <main className={styles.main}>
        {/* Chat Section */}
        <div className={styles.card}>
          <Image src="/images/chat.jpg" alt="Chat" width={500} height={300} />
          <h2>Chat</h2>
          <p>Send and receive messages in real-time.</p>
          <div className={styles.chatBox}>
            {messages.map((msg, index) => (
              <div key={index} className={styles.message}>
                {msg}
              </div>
            ))}
          </div>
          <input
            type="text"
            className={styles.input}
            placeholder="Type a message and press Enter"
            onKeyDown={handleSendMessage}
          />
        </div>

        {/* Tour Guide Section */}
        <div className={styles.card}>
          <Image
            src="/images/tour-guide.webp"
            alt="Tour Guide"
            width={500}
            height={300}
          />
          <h2>Virtual USVI Tour Guide</h2>
          <p>Ask about destinations, activities, and more.</p>
          <textarea
            value={tourQuestion}
            onChange={(e) => setTourQuestion(e.target.value)}
            className={styles.textarea}
            placeholder="Ask a question about USVI..."
          />
          <button onClick={handleTourQuestion} className={styles.button}>
            Ask
          </button>
          <div className={styles.answer}>{tourAnswer}</div>
        </div>

        {/* Knowledge Base Section */}
        <div className={styles.card}>
          <Image
            src="/knowledge.jpg"
            alt="Knowledge Base"
            width={500}
            height={300}
          />
          <h2>USVI Knowledge Base</h2>
          <p>Learn about USVI with our knowledge base.</p>
          <textarea
            value={knowledgeQuestion}
            onChange={(e) => setKnowledgeQuestion(e.target.value)}
            className={styles.textarea}
            placeholder="Ask a question about USVI..."
          />
          <button onClick={handleKnowledgeQuestion} className={styles.button}>
            Ask
          </button>
          <div className={styles.answer}>{knowledgeAnswer}</div>
        </div>

        {/* ... the rest of your existing sections ... */}
      </main>

      <footer className={styles.footer}>
        <p>Powered by World Class Chat Application</p>
      </footer>
    </div>
  );
}
