import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getPosts() {
  let dir;

  try {
    dir = fs.readdirSync("./posts/");

    const posts = dir
      .filter((file) => path.extname(file) === ".md")
      .map((file) => {
        const postContent = fs.readFileSync(`./posts/${file}`, "utf8");
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, content, title: data.title, id: data.id };
      })
      .filter(Boolean);

    return posts;
  } catch (error) {
    return [];
  }
}

export const getPostById = (id: number) => {
  const posts = getPosts();
  const postByID = posts.find((item) => item?.id == id) || null;
  return postByID;
};
