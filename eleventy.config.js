export default function (eleventyConfig) {
  // Static assets copied straight through to _site
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicons");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  // "2026-05-01" -> "May 2026"
  eleventyConfig.addFilter("monthYear", (iso) => {
    const [y, m] = String(iso).split("-");
    const names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${names[Number(m) - 1]} ${y}`;
  });
  // "2026-09-04" -> "September 4, 2026"
  eleventyConfig.addFilter("longDate", (val) => {
    const d = val instanceof Date ? val : new Date(String(val).slice(0, 10) + "T00:00:00Z");
    return d.toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  });
  // First n items of an array
  eleventyConfig.addFilter("head", (arr, n) => (arr || []).slice(0, n));
  // [{year, items}] newest year first, preserving item order
  eleventyConfig.addFilter("groupByYear", (arr) => {
    const groups = [];
    for (const item of arr || []) {
      const year = String(item.date).slice(0, 4);
      let g = groups.find((x) => x.year === year);
      if (!g) { g = { year, items: [] }; groups.push(g); }
      g.items.push(item);
    }
    return groups;
  });

  // Blog posts: every page under blog/ with a `title` in its front matter, newest first
  eleventyConfig.addCollection("blog", (api) =>
    api.getAll()
      .filter((p) => p.inputPath.startsWith("./blog/") && p.data.title)
      .sort((a, b) => (a.data.published < b.data.published ? 1 : -1))
  );

  return {
    htmlTemplateEngine: "njk",
    dir: { input: ".", output: "_site", includes: "_includes", data: "_data" }
  };
}
