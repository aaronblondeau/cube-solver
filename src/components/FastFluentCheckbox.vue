<script setup lang="ts">
// Fluent Checkbox Info:
// https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/checkbox/checkbox.spec.md

import type { Checkbox } from "@microsoft/fast-foundation";
import { watch, ref } from "vue";

// Why can't I just do this?
// let checked = false;

// This looks pretty ugly, but it defines our emit for v-model (passes internal changes up to the v-model)
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

// This is ugly too, but it defines the prop for v-model (brings external changes in from v-model)
const props = defineProps<{
  modelValue: boolean;
}>();

// Maintain internal state with a ref
const checked = ref<boolean>(props.modelValue);

// Ok, if you thought the stuff above was ugly, take a look at this.
// Who in their right mind can read this and figure out what is
// going on here.
watch(
  () => props.modelValue,
  (newValue) => {
    if (checked.value != newValue) {
      checked.value = newValue;
    }
  }
);

// When the native fluent-checkbox changes it's value, sync to internal state and v-model
const onChange = (change: CustomEvent) => {
  if (change?.target) {
    // Gotta love having to do this funky cast...
    checked.value = (change.target as Checkbox).checked;
    emit("update:modelValue", checked.value);
  }
};
</script>

<template>
  <fluent-checkbox @change="onChange" :checked="checked">
    <slot></slot>
  </fluent-checkbox>
</template>
