import * as React from "react";
import Select from "../components/select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Select",
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    inputRef: {
      name: "inputRef",
      description: "Référence React : React.useRef()",
    },
    label: {
      name: "label",
      description: "`string` - Label apparaissant au dessus du champ",
      control: "text",
    },
    options: {
      name: "options",
      description: "`{label, value}[] | string[]` - Options du select",
      control: "select",
      options: ["text", "date", "email", "phone"],
    },
    error: {
      name: "error",
      control: "text",
      description:
        "`boolean | string` - Message d'erreur affiché en rouge sous le champ",
    },
    valid: {
      name: "valid",
      control: "boolean",
      description: "`boolean` - Champ valid",
    },
    compact: {
      name: "compact",
      description:
        "`boolean` - Version réduite du champ avec moins de padding & taille de police réduite",
      control: "boolean",
    },
    required: {
      name: "required",
      description: "`boolean` - Champ requis",
      control: "boolean",
    },
    disabled: {
      name: "disabled",
      description: "`boolean` - Le champ est désactivé (non éditable)",
      control: "boolean",
    },
    readOnly: {
      name: "readOnly",
      description: "`boolean` - Le champ est en lecture seule (non éditable)",
      control: "boolean",
    },
    inputProps: {
      name: "inputProps",
      description:
        "`object` - Cette propriété permet de passer/surcharger les propriétés du champ",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div className="demo-container">
    <Select {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  label: "Les options",
  options: [
    { label: "Selectionnez une option", value: "" },
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
    { label: "Option 5", value: 5 },
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Les options",
  options: [
    { label: "Selectionnez une option", value: "" },
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
    { label: "Option 5", value: 5 },
  ],
  error: "Veuillez selectionner une option",
};

export const Valid = Template.bind({});
Valid.args = {
  label: "Les options",
  options: [
    { label: "Selectionnez une option", value: "" },
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
    { label: "Option 5", value: 5 },
  ],
  value: 2,
  valid: true,
};

export const Compact = Template.bind({});
Compact.args = {
  label: "Les options",
  options: [
    { label: "Selectionnez une option", value: "" },
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
    { label: "Option 5", value: 5 },
  ],
  compact: true,
};
