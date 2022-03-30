import * as React from 'react'
import Select from '../components/select'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignSystem/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    inputRef: {
      name: 'inputRef',
      description: 'Référence React : React.useRef()'
    },
    label: {
      name: 'label',
      description: 'Label apparaissant au dessus du champ',
      control: 'text'
    },
    errorMessage: {
      name: 'errorMessage',
      control: 'text'
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ width: '100%', maxWidth: 400, margin: '0 auto', padding: '30px 0' }}>
    <Select {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  label: 'Les options',
  options: [
    {
      label: 'Selectionnez',
      value: ''
    },
    {
      label: 'Option 1',
      value: 1
    },
    {
      label: 'Option 2',
      value: 2
    },
    {
      label: 'Option 3',
      value: 3
    },
    {
      label: 'Option 4',
      value: 4
    },
    {
      label: 'Option 5',
      value: 5
    }
  ]
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Les options',
  options: [
    {
      label: 'Selectionnez',
      value: ''
    },
    {
      label: 'Option 1',
      value: 1
    },
    {
      label: 'Option 2',
      value: 2
    },
    {
      label: 'Option 3',
      value: 3
    },
    {
      label: 'Option 4',
      value: 4
    },
    {
      label: 'Option 5',
      value: 5
    }
  ],
  errorMessage: 'Veuillez selectionner une option'
}
