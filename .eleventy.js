module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy('./_site/images');
  eleventyConfig.addLayoutAlias('base', 'page-templates/base.njk')
  
  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_site',
      includes: '_layouts',
      output: 'dist'
    }
  }
}