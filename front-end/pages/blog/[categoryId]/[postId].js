import { useRouter } from "next/router";
import usePost from "../../../api/usePost";

export default function BlogPost() {
  const router = useRouter();
  const { post, isLoading, isError } = usePost(router.query.postId);

  if (isLoading) {
    return <p>Ładowanie</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <img
        style={{
          maxWidth: 560,
        }}
        src={`http://localhost:1337${post.cover.url}`}
        alt={post.cover.alternativeText}
      />
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
}

// export async function getStaticPaths() {
//   const posts = await getPosts();

//   const paths = posts.map((item) => ({
//     params: { postId: String(item.id), categoryId: String(item.category.id) },
//   }));

//   return { paths, fallback: false };
// }
