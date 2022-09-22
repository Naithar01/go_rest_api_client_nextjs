export type ResponseCategory = {
  id: number;
  title: string;
  posts: number;
  CreatedAt: string;
};

export const GetAllCategoryList = async () => {
  return await fetch("http://localhost:4000/api/category", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
};
