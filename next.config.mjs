/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', 
          hostname: 'd25c7wiv62hyjr.cloudfront.net', 
          pathname: '/wp-content/uploads/**', 
        },
      ],
    },
  };
  
  export default nextConfig;
  