export default defineNuxtConfig({
  devtools: true,
  runtimeConfig: {
    title: "Title from config",
  },
  nuxtCustomWatcher: {
    files: ["./nuxt.config.*.ts"],
  },
});
