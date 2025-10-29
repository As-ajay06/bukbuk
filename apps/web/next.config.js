/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        BASE_URL:`${process.env.NEXT_PUBLIC_BASEURL}`,
    }
};

export default nextConfig;
