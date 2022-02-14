import { describe, it, expect } from "vitest";

// if (!window.matchMedia) {
//   window.matchMedia =
//     window.matchMedia ||
//     function () {
//       return {
//         matches: false,
//         addListener: function () {
//           console.log("~~ AL");
//         },
//         removeListener: function () {
//           console.log("~~ RL");
//         },
//       };
//     };
// }

// if (window.document && !window.document.createRange) {
//   window.document.createRange = () => ({
//     setStart: () => {
//       console.log("~~ SS");
//     },
//     setEnd: () => {
//       console.log("~~ SE");
//     },
//     commonAncestorContainer: {
//       nodeName: "BODY",
//       ownerDocument: document,
//     },
//   });
// }

// import {
//   provideFluentDesignSystem,
//   fluentCheckbox,
// } from "@fluentui/web-components";

import { mount } from "@vue/test-utils";
import FastFluentCheckbox from "../FastFluentCheckbox.vue";

// provideFluentDesignSystem().register(
//   fluentCheckbox()
// );

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

  // it.only("responds to clicks on label", async () => {
  //   const wrapper = mount(FastFluentCheckbox, { props: { modelValue: false } });

  //   console.log('~~dbg A', wrapper.html());

  //   // .find("fluent-checkbox").element
  //   // provideFluentDesignSystem(wrapper.element).register(
  //   //   fluentCheckbox()
  //   // );

  //   console.log('~~dbg B', wrapper.html());

  //   expect(
  //     wrapper.find("fluent-checkbox").element.getAttribute("checked")
  //   ).toEqual("false");
  //   expect(wrapper.vm.checked).toBe(false);

  //   await new Promise((resolve) => setTimeout(resolve, 500));

  //   console.log(wrapper.html());

  //   // await Vue.nextTick();
  //   // await wrapper.$nextTick()
  //   await wrapper.trigger("click"); // find('.label').

  //   // console.log('~~dbg', wrapper.emitted());

  //   expect(wrapper.vm.checked).toBe(true);
  //   expect(
  //     wrapper.find("fluent-checkbox").element.getAttribute("checked")
  //   ).toEqual("true");
  // });
});
