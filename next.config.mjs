export default {
  reactStrictMode: true,
  images: {
    domains: ['old-images.hb.ru-msk.vkcs.cloud']
  },
  webpack(config) {
    // Добавляем правило для обработки SVG файлов
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
