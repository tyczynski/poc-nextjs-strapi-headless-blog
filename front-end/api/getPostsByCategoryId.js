export default async function getPostsByCategoryId(categoryId) {
  return await (
    await fetch(`${process.env.API_HOST}/posts?category=${categoryId}`)
  ).json();
}
