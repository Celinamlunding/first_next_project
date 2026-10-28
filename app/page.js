import Link from "next/link";
import PostList from "@/components/PostList";
import { getRecentPosts } from "@/lib/wordpress";

export default async function HomePage() {
  const posts = await getRecentPosts(3);

  return (
    <main>
      <h1>Stories from Aarhus</h1>
      <PostList posts={posts} />
      <p>
        <Link href="/posts">Se alle indlæg</Link>
      </p>
    </main>
  );
}
