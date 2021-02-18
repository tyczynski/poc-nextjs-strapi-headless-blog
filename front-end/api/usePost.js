import useSWR from "swr";

export default function usePost(id) {
  const { data, error } = useSWR(`http://localhost:1337/posts/${id}`);

  return {
    post: data,
    isLoading: !error && !data,
    isError: error,
  };
}
