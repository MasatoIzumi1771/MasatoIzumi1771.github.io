const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });
    eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
    eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });
    eleventyConfig.addPassthroughCopy('src/articles/**/*.{png,jpg,jpeg,gif,webp,svg}');

    eleventyConfig.addCollection('articlesOrdered', (collectionApi) => {
        return collectionApi.getFilteredByTag('articles').sort((a, b) => {
            return (b.date || 0) - (a.date || 0);
        });
    });

    eleventyConfig.addFilter('limit', (arr, count) => (Array.isArray(arr) ? arr.slice(0, count) : []));
    eleventyConfig.addFilter('fmtDate', (dateObj) => {
        try {
            return DateTime.fromJSDate(dateObj).toFormat('yyyy.MM.dd');
        } catch (e) {
            return '';
        }
    });
    eleventyConfig.addFilter('striptags', (value = '') => value.toString().replace(/<[^>]*>?/gm, ''));
    eleventyConfig.addFilter('squash', (value = '') => value.toString().replace(/\s+/g, ' ').trim());
    eleventyConfig.addFilter('jsonify', (value) => JSON.stringify(value));

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
