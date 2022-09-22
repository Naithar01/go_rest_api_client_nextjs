export type ResponsePost = {
  id: number;
  content: string;
  tags: string[];
  CreatedAt: string;
};

export const GetAllPostList = async (category_id: number | undefined) => {
  return await fetch(
    `http://localhost:4000/api/post?category_id=${category_id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
};

export const GetAllPostListNoCategoryQuery = async () => {
  return await fetch(`http://localhost:4000/api/post`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
};
