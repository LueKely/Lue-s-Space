import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  console.log(context.site);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    customData: `<image>
      <url>${context.site}favicon.ico</url>
      <title>${SITE_TITLE}</title>
      <link>${context.site}</link>
    </image>`,
    items: posts.map((post) => ({
      ...post.data,
      link: `/lue-s-space/blog/${post.id}/`,
    })),
  });
}
