import { defineNuxtModule, createResolver } from "@nuxt/kit";
import { sync } from "fast-glob";
export const moduleConfigKey = "nuxtCustomWatcher";

export interface ModuleOptions {
  files: string[];
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-custom-watcher",
    configKey: moduleConfigKey,
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  setup: function (moduleOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    // Resolving files matching the glob pattern
    const filesToWatch = (moduleOptions.files || [])
      .map((file) => sync(resolve(nuxt.options.srcDir, file)))
      .flat(1);
    filesToWatch.forEach((file) => {
      nuxt.options.watch.push(file);
    });
  },
});
