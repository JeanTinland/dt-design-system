import * as React from 'react'
import Snackbar from '../components/snackbar'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Snackbar',
  component: Snackbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      name: 'type',
      description: '`string` - Type de la snackbar (success, error, warning, information)',
      control: 'text'
    },
    message: {
      name: 'message',
      description: '`string` - Message affiché dans la snackbar',
      control: 'boolean'
    },
    closeButton: {
      name: 'closeButton',
      description: '`function` - Afficher ou non le bouton "X"',
      control: 'boolean'
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div className="demo-container" style={{ width: 'auto' }}>
    <Snackbar {...args} />
  </div>
)

export const Information = Template.bind({})
Information.args = {
  type: 'information',
  message: 'Rien à sauvegarder'
}

export const InformationWithoutFiller = Template.bind({})
InformationWithoutFiller.args = {
  type: 'information',
  message: 'Rien à sauvegarder',
  filler: false
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  message: 'Contenu sauvegardé'
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  message: 'Les données affichées ne sont pas à jour'
}

export const Error = Template.bind({})
Error.args = {
  type: 'error',
  message: 'Une erreur est survenue'
}
