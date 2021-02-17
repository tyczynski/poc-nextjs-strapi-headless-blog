export default async function getCategoryById(categoryId) {
  return await (
    await fetch(`${process.env.API_HOST}/categories/${categoryId}`)
  ).json();
}
