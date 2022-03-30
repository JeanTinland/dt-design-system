import * as React from 'react'
import TextArea from '../components/textarea'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignSystem/TextArea',
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fieldRef: {
      name: 'fieldRef',
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
  errorMessage: 'Votre message est trop long'
}

export const WithDecoration = Template.bind({})
WithDecoration.args = {
  label: 'Label'
}

export const Compact = Template.bind({})
Compact.args = {
  label: 'Message',
  placeholder: 'Votre message...',
  compact: true
}
