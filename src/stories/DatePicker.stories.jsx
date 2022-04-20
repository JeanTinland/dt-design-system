import * as React from 'react'
import DatePicker from '../components/date-picker'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DatePicker',
  component: DatePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    lang: {
      name: 'lang',
      description:
        '`string` - Optionnel, "fr" par défaut. Détermine la langue du selecteur. Seuls "fr" & "en" sont supportés.',
      control: 'text'
    },
    min: {
      name: 'min',
      description: '`string` - Désactive toutes la selection des dates avant celle-ci (au format AAAA-MM-JJ)',
      control: 'text'
    },
    max: {
      name: 'max',
      description: '`string` - Désactive toutes la selection des dates après celle-ci (au format AAAA-MM-JJ)',
      control: 'text'
    },
    value: {
      name: 'value',
      description: '`string` - Valeur selectionnée (au format AAAA-MM-JJ)',
      control: 'text'
    },
    onChange: {
      name: 'onChange',
      description: '`function` - Fonction executée lors du changement de valeur',
      control: 'boolean'
    },
    defaultMonth: {
      name: 'defaultMonth',
      description:
        "`number` - Optionnel, mois affiché par défaut à l'overture du date picker. Doit être compris entre 1 & 12.",
      control: 'number'
    },
    defaultYear: {
      name: 'defaultYear',
      description: "`number` - Optionnel, année affichée par défaut à l'overture du date picker.",
      control: 'number'
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const [value, setValue] = React.useState(args.value)
  const formatedValue = value ? new Date(value).toLocaleDateString('fr-FR') : '`undefined`'
  return (
    <div className="demo-container" style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        Valeur selectionnée : <b>{formatedValue}</b>
      </div>
      <br />
      <DatePicker {...args} value={value} onChange={setValue} />
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  value: '2022-07-18'
}

export const OnlyPastDates = Template.bind({})
OnlyPastDates.args = {
  max: '2022-04-15',
  defaultMonth: 4,
  defaultYear: 2022
}

export const OnlyFutureDates = Template.bind({})
OnlyFutureDates.args = {
  min: '2022-04-15',
  defaultMonth: 4,
  defaultYear: 2022
}

export const SpecificInterval = Template.bind({})
SpecificInterval.args = {
  min: '2022-04-10',
  max: '2022-04-17',
  defaultMonth: 4,
  defaultYear: 2022
}
