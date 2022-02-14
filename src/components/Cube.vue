<script setup lang="ts">
import FastFluentCheckbox from "@/components/FastFluentCheckbox.vue";
import { useCubeStore } from "@/stores/cube";
const cube = useCubeStore();

function debug() {
  cube.easyMode = !cube.easyMode;
}
</script>

<template>
  <div>Mode: {{ cube.easyMode ? "Yes" : "No" }}</div>
  <div>
    <fluent-button @click="debug">Toggle</fluent-button>
  </div>
  <div>
    <FastFluentCheckbox v-model="cube.easyMode"
      >My Easy Mode</FastFluentCheckbox
    >
  </div>
</template>
