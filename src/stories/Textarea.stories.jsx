import * as React from 'react'
import TextArea from '../components/textarea'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TextArea',
  component: TextArea,
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
const Template = (args) => (
  <div className="demo-container">
    <TextArea {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  label: 'Message',
  placeholder: 'Votre message...'
}

export const AutoSizingHeight = Template.bind({})
AutoSizingHeight.args = {
  label: 'Message',
  placeholder: 'Votre message...',
  autoSizing: true
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
  placeholder: 'Message'
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Votre message',
  value:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim, felis a ullamcorper accumsan, nibh ligula tincidunt justo, quis iaculis libero nisl in leo.',
  autoSizing: true,
  error: 'Votre message est trop long'
}

export const Compact = Template.bind({})
Compact.args = {
  label: 'Message',
  placeholder: 'Votre message...',
  compact: true
}
