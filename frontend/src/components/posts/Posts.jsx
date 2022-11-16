import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts d-flex justify-content-center">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
