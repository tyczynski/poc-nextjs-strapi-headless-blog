export default async function getPostById(postId) {
  return await (await fetch(`${process.env.API_HOST}/posts/${postId}`)).json();
}
