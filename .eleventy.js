module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/site.webmanifest');
    eleventyConfig.addPassthroughCopy('src/robot.txt');
    return {
        dir: {
            input: "src",
            output: "dist"
        },
    };
}