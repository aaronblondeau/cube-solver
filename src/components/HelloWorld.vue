<script setup lang="ts">
defineProps<{
  msg: string;
}>();

function onClick() {
  console.log("Yay!");
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>

    <fluent-card>
      <h2>{{ msg }}</h2>
      <fluent-button appearance="accent" v-on:click="onClick"
        >Click Me</fluent-button
      >
    </fluent-card>
    <fluent-progress value="64"></fluent-progress>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
