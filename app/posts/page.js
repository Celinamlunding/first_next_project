import PostCard from "@/components/PostCard";
import styles from "../page.module.css";

export default async function PostsPage() {
  const response = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts`,
  );
  const posts = await response.json();
  console.log(posts);

  return (
    <main>
      <h1>Posts</h1>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
