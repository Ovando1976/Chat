// pages/profile.js

export default function Profile() {
  const user = {
    name: "Alice Wonderland",
    bio: "Curious wanderer. Lover of AI art and experiments.",
    avatar: "https://via.placeholder.com/60", // Replace with real avatar URL
  };
  const recentPosts = [
    {
      id: 1,
      content: "I just discovered a new AI tool that draws cats in hats.",
    },
    {
      id: 2,
      content: "Exploring generative music compositions now!",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Profile
      </h2>
      <div className="flex items-center mt-4">
        {/* Avatar */}
        <img
          src={user.avatar}
          alt="avatar"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {user.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{user.bio}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="p-4 bg-white rounded shadow dark:bg-gray-800"
            >
              <p className="text-gray-800 dark:text-gray-200">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
