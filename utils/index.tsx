// sortBlogs.ts
import { compareDesc, parseISO } from "date-fns";
import { Blog } from 'contentlayer/generated'; // Import Blog type using shortcut

export const sortBlogs = (blogs: Blog[]): Blog[] => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
