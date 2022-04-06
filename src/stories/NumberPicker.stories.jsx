import * as React from 'react'
import NumberPicker from '../components/number-picker'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NumberPicker',
  component: NumberPicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      name: 'label',
      description: '`string` - Label apparaissant au gauche du selecteur',
      control: 'text'
    },
    min: {
      name: 'min',
      description: '`number` - Valeur minimale autorisée'
    },
    max: {
      name: 'max',
      description: '`number` - Valeur maximale autorisée'
    },
    value: {
      name: 'value',
      description: '`number` - Valeur du champ'
    },
    onChange: {
      name: 'onChange',
      description: '`function` - Fonction executée lors du changement de valeur',
      control: 'boolean'
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const [value, setValue] = React.useState(args.value ?? 0)
  return (
    <div className="demo-container" style={{ maxWidth: 300 }}>
      <NumberPicker {...args} value={value} onChange={setValue} />
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  label: 'Nombre de personnes',
  min: 0,
  max: 20,
  value: 13
}

export const WithInput = Template.bind({})
WithInput.args = {
  label: 'Nombre de personnes',
  min: 0,
  max: 20,
  value: 13,
  withInput: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Nombre de personnes',
  min: 0,
  max: 20,
  value: 13,
  disabled: true
}
