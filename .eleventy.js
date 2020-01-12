module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("source/favicon.ico");
  eleventyConfig.addPassthroughCopy("source/favicon-152.png");
  eleventyConfig.addPassthroughCopy("source/CNAME");
  eleventyConfig.addPassthroughCopy("source/style/type");

  return {
    dir: {
      input: "source",
      output: "docs"
    }
  };
};
