import Link from "next/link";
import getCategories from "../../api/getCategories";

export default function Blog({ categories }) {
  return (
    <>
      <h1>Blog</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/blog/${category.id}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const categories = await getCategories();

  return { props: { categories } };
}
