/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    compiler: {
        styledComponents: true,
    },
    basePath: "",
    env: {
        ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
        SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
        REGION: process.env.REGION,
        S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
    },
};

module.exports = nextConfig;
