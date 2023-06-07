/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    compiler: {
        styledComponents: true,
    },
    basePath: "",
    output: "export",
};

module.exports = nextConfig;
