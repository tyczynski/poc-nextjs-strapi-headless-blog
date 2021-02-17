export default async function getPostsByCategoryId() {
  return await (await fetch(`${process.env.API_HOST}/posts`)).json();
}
