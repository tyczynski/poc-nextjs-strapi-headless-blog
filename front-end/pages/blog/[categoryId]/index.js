import Link from "next/link";
import getCategories from "../../../api/getCategories";
import getPostsByCategoryId from "../../../api/getPostsByCategoryId";
import getCategoryById from "../../../api/getCategoryById";

export default function BlogCategory({ category, posts }) {
  return (
    <div>
      <h1>Blog - {category.title}</h1>
      <hr />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${category.id}/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const category = await getCategoryById(ctx.params.categoryId);
  const posts = await getPostsByCategoryId(ctx.params.categoryId);

  return { props: { category, posts } };
}

export async function getStaticPaths() {
  const categories = await getCategories();

  const paths = categories.map((item) => ({
    params: { categoryId: String(item.id) },
  }));

  return { paths, fallback: false };
}
