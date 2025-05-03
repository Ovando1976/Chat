// pages/index.js
export default function Home() {
  const posts = [
    {
      id: 1,
      author: "Alice",
      content: "Exploring a brand-new AI tool for photo generation!",
    },
    {
      id: 2,
      author: "Bob",
      content: "Just booked a trip to USVI with an AI-based travel planner!",
    },
    // ... and so on
  ];

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
        Your Feed
      </h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-white rounded shadow dark:bg-gray-800"
          >
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>{post.author}</strong> says:
            </p>
            <p className="mt-2 text-gray-800 dark:text-gray-200">
              {post.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
