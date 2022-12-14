export type ResponsePost = {
  id: number;
  content: string;
  category_id: number;
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

export const GetPostById = async (id: string | string[] | undefined) => {
  return await fetch(`http://localhost:4000/api/post/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
};

export const SearchPostByContent = async (content: string | string[]) => {
  return await fetch("http://localhost:4000/api/post/search/content", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ content }),
  });
};
