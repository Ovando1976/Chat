import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>World Class Chat Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>World Class Chat Application</h1>
        <nav className={styles.nav}>
          <a href="#chat">Chat</a>
          <a href="#tour-guide">Tour Guide</a>
          <a href="#rideshare">Rideshare</a>
          <a href="#food-delivery">Food Delivery</a>
          <a href="#event-planner">Event Planner</a>
          <a href="#hotel-booking">Hotel Booking</a>
          <a href="#flight-booking">Flight Booking</a>
          <a href="#boat-charter">Boat Charter</a>
          <a href="#knowledge-base">Knowledge Base</a>
          <a href="#video-call">Video Call</a>
        </nav>
        <button id="toggle-theme" className={styles.themeToggle}>Toggle Dark Mode</button>
      </header>

      <main className={styles.main}>
        <section id="chat" className={styles.section}>
          <h2>Chat</h2>
          <div id="chat-box" className={styles.chatBox}></div>
          <input type="text" id="message-input" className={styles.input} placeholder="Type a message and press Enter" />
        </section>

        <section id="tour-guide" className={styles.section}>
          <h2>Virtual USVI Tour Guide</h2>
          <textarea id="tour-question" className={styles.textarea} placeholder="Ask a question about USVI..."></textarea>
          <button id="ask-tour-guide" className={styles.button}>Ask</button>
          <div id="tour-answer" className={styles.answer}></div>
        </section>

        <section id="rideshare" className={styles.section}>
          <h2>Ridesharing</h2>
          <ul id="ride-list" className={styles.list}></ul>
          <button id="request-ride" className={styles.button}>Request Ride</button>
        </section>

        <section id="food-delivery" className={styles.section}>
          <h2>Food Delivery</h2>
          <ul id="restaurant-list" className={styles.list}></ul>
        </section>

        <section id="event-planner" className={styles.section}>
          <h2>Event Planner</h2>
          <form id="event-form" className={styles.form}>
            <input type="text" id="event-title" className={styles.input} placeholder="Event Title" required />
            <textarea id="event-description" className={styles.textarea} placeholder="Event Description" required></textarea>
            <input type="date" id="event-date" className={styles.input} required />
            <input type="text" id="event-location" className={styles.input} placeholder="Event Location" required />
            <button type="submit" className={styles.button}>Create Event</button>
          </form>
          <ul id="event-list" className={styles.list}></ul>
        </section>

        <section id="hotel-booking" className={styles.section}>
          <h2>Hotel Booking</h2>
          <ul id="hotel-list" className={styles.list}></ul>
          <form id="hotel-form" className={styles.form}>
            <input type="text" id="hotel-user-id" className={styles.input} placeholder="User ID" required />
            <input type="date" id="hotel-date" className={styles.input} required />
            <button type="submit" className={styles.button}>Book Hotel</button>
          </form>
        </section>

        <section id="flight-booking" className={styles.section}>
          <h2>Airline Tickets</h2>
          <ul id="flight-list" className={styles.list}></ul>
          <form id="flight-form" className={styles.form}>
            <input type="text" id="flight-user-id" className={styles.input} placeholder="User ID" required />
            <input type="date" id="flight-date" className={styles.input} required />
            <button type="submit" className={styles.button}>Book Flight</button>
          </form>
        </section>

        <section id="boat-charter" className={styles.section}>
          <h2>Boat Charters</h2>
          <ul id="boat-list" className={styles.list}></ul>
          <form id="boat-form" className={styles.form}>
            <input type="text" id="boat-user-id" className={styles.input} placeholder="User ID" required />
            <input type="date" id="boat-date" className={styles.input} required />
            <button type="submit" className={styles.button}>Book Boat</button>
          </form>
        </section>

        <section id="knowledge-base" className={styles.section}>
          <h2>USVI Knowledge Base</h2>
          <textarea id="knowledge-question" className={styles.textarea} placeholder="Ask a question about USVI..."></textarea>
          <button id="ask-knowledge-base" className={styles.button}>Ask</button>
          <div id="knowledge-answer" className={styles.answer}></div>
        </section>

        <section id="video-call" className={styles.section}>
          <h2>Video Call</h2>
          <video id="localVideo" className={styles.video} autoplay muted></video>
          <video id="remoteVideo" className={styles.video} autoplay></video>
          <button id="startCall" className={styles.button}>Start Call</button>
          <button id="joinCall" className={styles.button}>Join Call</button>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
