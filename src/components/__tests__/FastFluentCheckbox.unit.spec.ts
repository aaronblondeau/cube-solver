import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FastFluentCheckbox from "../FastFluentCheckbox.vue";

describe("FastFluentCheckbox", () => {
  it("renders properly when model is false", () => {
    const wrapper = mount(FastFluentCheckbox, { props: { modelValue: false } });
    // We could also do this
    // expect(wrapper.html()).toContain('checked="false"');
    expect(
      wrapper.find("fluent-checkbox").element.getAttribute("checked")
    ).toEqual("false");
  });

  it("renders properly when model is true", () => {
    const wrapper = mount(FastFluentCheckbox, { props: { modelValue: true } });
    expect(
      wrapper.find("fluent-checkbox").element.getAttribute("checked")
    ).toEqual("true");
  });

  it("responds to model updates", async () => {
    const wrapper = mount(FastFluentCheckbox, { props: { modelValue: false } });
    expect(
      wrapper.find("fluent-checkbox").element.getAttribute("checked")
    ).toEqual("false");
    expect(wrapper.vm.checked).toBe(false);

    // Update modelValue prop
    await wrapper.setProps({ modelValue: true });

    expect(wrapper.vm.checked).toBe(true);
    expect(
      wrapper.find("fluent-checkbox").element.getAttribute("checked")
    ).toEqual("true");
  });
});
