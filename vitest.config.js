import vue from "@vitejs/plugin-vue";

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.startsWith("fluent-"),
        },
      },
    }),
  ],
  test: {
    include: ['src/**/__tests__/*.unit.spec.ts'],
    deps: {
      inline: ["@microsoft/fast-colors"],
    },
  },
};
