import Link from "next/link";
import getPosts from "../../../api/getPosts";
import getPostById from "../../../api/getPostById";

export default function BlogPost({ post, apiHost }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <img
        style={{
          maxWidth: 560,
        }}
        src={`${apiHost}${post.cover.url}`}
        alt={post.cover.alternativeText}
      />
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const post = await getPostById(ctx.params.postId);

  return { props: { post, apiHost: process.env.API_HOST } };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((item) => ({
    params: { postId: String(item.id), categoryId: String(item.category.id) },
  }));

  return { paths, fallback: false };
}
