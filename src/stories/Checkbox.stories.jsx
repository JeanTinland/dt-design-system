import * as React from 'react'
import Checkbox from '../components/checkbox'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      name: 'label',
      description: '`string` - Label apparaissant au gauche du selecteur',
      control: 'text'
    },
    value: {
      name: 'value',
      description: '`number` - Valeur du champ',
      control: 'boolean'
    },
    onChange: {
      name: 'onChange',
      description: '`function` - Fonction executée lors du changement de valeur',
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
    inputProps: {
      name: 'inputProps',
      description: '`object` - Cette propriété permet de passer/surcharger les propriétés du champ'
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div className="demo-container" style={{ width: 'auto' }}>
    <Checkbox {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  label: 'Assurance Carré Neige'
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Assurance Carré Neige',
  value: true,
  disabled: true
}
