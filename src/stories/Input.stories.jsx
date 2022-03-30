import * as React from 'react'
import Input from '../components/input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignSystem/Input',
  component: Input,
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
    type: {
      name: 'type',
      description: 'Type du champ',
      control: 'select',
      options: ['text', 'date', 'email', 'phone']
    },
    errorMessage: {
      name: 'errorMessage',
      control: 'text'
    },
    compact: {
      name: 'compact',
      description: 'Version réduite du champ avec moins de padding & taille de police réduite',
      control: 'boolean'
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ width: '100%', maxWidth: 400, margin: '0 auto', padding: '30px 0' }}>
    <Input {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  type: 'text',
  label: 'Nom complet',
  placeholder: 'John Smith'
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
