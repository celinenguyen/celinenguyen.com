module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("source/favicon.ico");
  eleventyConfig.addPassthroughCopy("source/favicon-152.png");
  eleventyConfig.addPassthroughCopy("source/CNAME");
  eleventyConfig.addPassthroughCopy("source/includes/style/type");

  return {
    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: "source",
      includes: "includes",
      data: "data",
      output: "docs"
    }
  };
};
