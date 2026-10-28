import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPostBySlug } from "@/lib/wordpress";

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <div
          className="wp-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
        <Link href="/posts">Tilbage til indlæg</Link>
      </article>
    </main>
  );
}
