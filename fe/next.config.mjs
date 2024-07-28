/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Kích hoạt chế độ Strict Mode
  webpack(config) {
    // Điều chỉnh các phần Webpack nếu cần
    return config;
  },
};

export default nextConfig;
