export default async function getCategories() {
  return await (await fetch(`${process.env.API_HOST}/categories`)).json();
}
