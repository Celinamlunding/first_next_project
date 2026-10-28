const WORDPRESS_URL = process.env.WORDPRESS_URL;

async function fetchJson(url) {
  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`WordPress request failed: ${response.status}`);
  }

  return response.json();
}

export async function getPosts() {
  return fetchJson(`${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed`);
}

export async function getRecentPosts(limit = 3) {
  return fetchJson(
    `${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed&per_page=${limit}`,
  );
}

export async function getPostBySlug(slug) {
  const posts = await fetchJson(
    `${WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
  );

  return posts[0] ?? null;
}

export async function getAboutPage() {
  const pages = await fetchJson(
    `${WORDPRESS_URL}/wp-json/wp/v2/pages?slug=about&_embed`,
  );

  return pages[0] ?? null;
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("da-DK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
