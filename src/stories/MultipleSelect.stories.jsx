import * as React from 'react'
import MultipleSelect from '../components/multiple-select'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'MultipleSelect',
  component: MultipleSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    inputRef: {
      name: 'inputRef',
      description: 'Référence React : React.useRef()'
    },
    label: {
      name: 'label',
      description: '`string` - Label apparaissant au dessus du champ',
      control: 'text'
    },
    options: {
      name: 'options',
      description: '`{label, value}[] | string[]` - Options du select',
      control: 'select',
      options: ['text', 'date', 'email', 'phone']
    },
    error: {
      name: 'error',
      control: 'text',
      description: "`boolean | string` - Message d'erreur affiché en rouge sous le champ"
    },
    valid: {
      name: 'valid',
      control: 'boolean',
      description: '`boolean` - Champ valid'
    },
    compact: {
      name: 'compact',
      description: '`boolean` - Version réduite du champ avec moins de padding & taille de police réduite',
      control: 'boolean'
    },
    required: {
      name: 'required',
      description: '`boolean` - Champ requis',
      control: 'boolean'
    },
    disabled: {
      name: 'disabled',
      description: '`boolean` - Le champ est désactivé (non éditable)',
      control: 'boolean'
    },
    readOnly: {
      name: 'readOnly',
      description: '`boolean` - Le champ est en lecture seule (non éditable)',
      control: 'boolean'
    },
    inputProps: {
      name: 'inputProps',
      description: '`object` - Cette propriété permet de passer/surcharger les propriétés du champ'
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const [values, setValues] = React.useState(args.values ?? [])

  const placeholder =
    values.length > 1 ? `${values.length} options` : values.length === 1 ? values[0].label : args.placeholder

  return (
    <div className="demo-container">
      <MultipleSelect {...args} values={values} onChange={setValues} placeholder={placeholder} />
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  label: 'Les options',
  placeholder: 'Selectionnez une option',
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
    { label: 'Option 5', value: 5 },
    { label: 'Option 6', value: 6 },
    { label: 'Option 7', value: 7 },
    { label: 'Option 8', value: 8 },
    { label: 'Option 9', value: 9 },
    { label: 'Option 10', value: 10 }
  ]
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Les options',
  placeholder: 'Selectionnez une option',
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
    { label: 'Option 5', value: 5 },
    { label: 'Option 6', value: 6 },
    { label: 'Option 7', value: 7 },
    { label: 'Option 8', value: 8 },
    { label: 'Option 9', value: 9 },
    { label: 'Option 10', value: 10 }
  ],
  error: 'Veuillez selectionner au moins une option'
}

export const Valid = Template.bind({})
Valid.args = {
  label: 'Les options',
  placeholder: 'Selectionnez une option',
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
    { label: 'Option 5', value: 5 },
    { label: 'Option 6', value: 6 },
    { label: 'Option 7', value: 7 },
    { label: 'Option 8', value: 8 },
    { label: 'Option 9', value: 9 },
    { label: 'Option 10', value: 10 }
  ],
  values: [
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 }
  ],
  valid: true
}

export const Compact = Template.bind({})
Compact.args = {
  label: 'Les options',
  placeholder: 'Selectionnez une option',
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
    { label: 'Option 5', value: 5 }
  ],
  compact: true
}
