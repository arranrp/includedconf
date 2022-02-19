module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/site.webmanifest');
    return {
        dir: {
            input: "src",
            output: "dist"
        },
    };
}