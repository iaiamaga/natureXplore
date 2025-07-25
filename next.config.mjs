/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Adicione o basePath se você estiver hospedando em um subdiretório do seu domínio GitHub Pages
  // Por exemplo, se seu repositório for username.github.io/naturexplore-site
  // basePath: '/naturexplore-site',
  trailingSlash: true,
};

export default nextConfig;
