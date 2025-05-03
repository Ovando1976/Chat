// documents/document.js
// This is just a placeholder approach, could be a Next.js page or a pure module:

import { useState } from "react";

export default function DocumentEditor() {
  const [content, setContent] = useState("");
  // onChange => broadcast changes via WebSocket
  // onMessage => apply changes from others

  return (
    <div>
      <h2>Collaborative Document</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        cols={50}
      />
    </div>
  );
}
