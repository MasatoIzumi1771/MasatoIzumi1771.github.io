module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });
    eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
    eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });
    eleventyConfig.addPassthroughCopy('src/articles/**/*.{png,jpg,jpeg,gif,webp,svg}');

    eleventyConfig.addFilter('limit', (arr, count) => (Array.isArray(arr) ? arr.slice(0, count) : []));

    eleventyConfig.setServerOptions({
        port: 8080,
        watch: ['src/css', 'src/js', 'src/images'],
    });

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            data: '_data',
            output: 'docs',
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        templateFormats: ['njk', 'md', 'html'],
    };
};
