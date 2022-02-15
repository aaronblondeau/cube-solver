/*eslint-disable no-undef*/
import { mount } from "@cypress/vue";
import FastFluentCheckbox from "../FastFluentCheckbox.vue";

import {
  provideFluentDesignSystem,
  fluentCheckbox,
} from "@fluentui/web-components";

provideFluentDesignSystem().register(fluentCheckbox());

it("is renders slot", () => {
  mount(FastFluentCheckbox, {
    propsData: {
      modelValue: true,
    },
    slots: {
      default: {
        render: () => "Check Me!",
      },
    },
  });

  cy.get("fluent-checkbox")
    .invoke("text")
    .should("equal", "Check Me!");
});

it("it responds to clicks on label", () => {
  mount(FastFluentCheckbox, {
    propsData: {
      modelValue: false,
    },
    slots: {
      default: {
        render: () => "Check Me!",
      },
    },
  });

  cy.get("fluent-checkbox").should("have.attr", "current-checked");
  cy.get("fluent-checkbox")
    .invoke("attr", "current-checked")
    .should("eq", "false");

  cy.get("fluent-checkbox").shadow().find("label").click();

  cy.get("fluent-checkbox")
    .invoke("attr", "current-checked")
    .should("eq", "true");
});

it("it responds to clicks on control", () => {
  mount(FastFluentCheckbox, {
    propsData: {
      modelValue: false,
    },
    slots: {
      default: {
        render: () => "Check Me!",
      },
    },
  });

  cy.get("fluent-checkbox").should("have.attr", "current-checked");
  cy.get("fluent-checkbox")
    .invoke("attr", "current-checked")
    .should("eq", "false");

  cy.get("fluent-checkbox")
    .shadow()
    .find(".control")
    .click();

  cy.get("fluent-checkbox")
    .invoke("attr", "current-checked")
    .should("eq", "true");
});
