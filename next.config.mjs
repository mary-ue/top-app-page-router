export default {
  reactStrictMode: true,
  webpack(config) {
    // Добавляем правило для обработки SVG файлов
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
