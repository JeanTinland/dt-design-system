import * as React from 'react'
import Input from '../components/input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input',
  component: Input,
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
    type: {
      name: 'type',
      description: 'Type du champ',
      control: 'select',
      options: ['text', 'date', 'email', 'phone']
    },
    errorMessage: {
      name: 'errorMessage',
      control: 'text',
      description: "`string` - Message d'erreur affiché en rouge sous le champ"
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
const Template = (args) => (
  <div className="demo-container">
    <Input {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  type: 'text',
  label: 'Nom complet',
  placeholder: 'John Smith'
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'text',
  label: 'Nom complet',
  placeholder: 'John Smith',
  disabled: true
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  type: 'text',
  label: 'Nom complet',
  placeholder: 'John Smith',
  readOnly: true
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
  placeholder: 'Nom de famille'
}

export const EmailWithError = Template.bind({})
EmailWithError.args = {
  label: 'Adresse email',
  type: 'email',
  value: 'john-smith.com',
  errorMessage: "Format d'adresse email invalide"
}

export const WithDecoration = Template.bind({})
WithDecoration.args = {
  label: 'Label'
}

export const Compact = Template.bind({})
Compact.args = {
  type: 'text',
  label: 'Nom complet',
  placeholder: 'John Smith',
  compact: true
}
