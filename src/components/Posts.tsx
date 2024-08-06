interface Tag {
  name: string;
}

interface BlogPost {
  title: string;
  content: string;
  author: string;
  date: string; // Consider using Date type for more precise date handling
  tags: Tag[];
}

const blogPosts: BlogPost[] = [
  {
    title: "Mastering TypeScript: A Deep Dive",
    content:
      "Explore the intricacies of TypeScript, from type annotations to advanced features. Discover how to write cleaner, more maintainable code.",
    author: "John Doe",
    date: "2023-11-22",
    tags: [
      { name: "typescript" },
      { name: "programming" },
      { name: "javascript" },
      { name: "code" },
    ],
  },
  {
    title: "Building Scalable Node.js Applications",
    content:
      "Learn best practices for architecting Node.js applications that can handle increasing traffic and complexity.",
    author: "Jane Smith",
    date: "2024-03-15",
    tags: [
      { name: "node.js" },
      { name: "javascript" },
      { name: "scalability" },
      { name: "backend" },
    ],
  },
  {
    title: "React Hooks: Simplifying State Management",
    content:
      "Uncover the power of React Hooks to manage component state efficiently. Learn about useState, useEffect, and more.",
    author: "Alex Brown",
    date: "2024-05-08",
    tags: [
      { name: "react" },
      { name: "javascript" },
      { name: "hooks" },
      { name: "frontend" },
    ],
  },
  {
    title: "The Future of Web Development: AI and Machine Learning",
    content:
      "Explore the impact of AI and machine learning on web development. Discover how these technologies are shaping the future of the web.",
    author: "Emily Johnson",
    date: "2024-07-21",
    tags: [
      { name: "ai" },
      { name: "machine learning" },
      { name: "web development" },
      { name: "future" },
    ],
  },
];

const Posts = () => {
  return (
    <>
      {blogPosts.map((post) => {
        return (
          <div className="container border-b-2 p-4 border-b-stone-800 flex flex-col gap-2">
            <h2 className="font-semibold text-yellow-600">{post.title}</h2>
            <p className="text-sm font-light">{post.content}</p>
            <div className="flex flex-col justify-between md:flex-row gap-2">
              <div className="flex flex-row gap-2">
                {post.tags.map((tag) => {
                  return (
                    <span className="bg-transparent p-2 text-xs border rounded border-stone-700">
                      {tag.name}
                    </span>
                  );
                })}
              </div>
              <p>{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
