import * as React from 'react'
import Button from '../components/button'
import SnackbarProvider, { useSnackbar } from '../components/snackbar/provider'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SnackbarProvider',
  component: SnackbarProvider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div className="demo-container" style={{ width: 'auto' }}>
    <SnackbarProvider>
      <Inner />
    </SnackbarProvider>
  </div>
)

const Inner = (args) => {
  const Snackbar = useSnackbar()

  const showSuccess = () => {
    Snackbar.show({ type: 'success', message: 'Contenu sauvegardé' })
  }

  const showWarning = () => {
    Snackbar.show({ type: 'warning', message: 'Attention, votre texte contient des fautes' })
  }

  const showError = () => {
    Snackbar.show({ type: 'error', message: 'Erreur lors de la sauvegarde du contenu' })
  }

  const showInformation = () => {
    Snackbar.show({ type: 'information', message: 'Aucune modification à sauvegarder' })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
      <Button
        onClick={showSuccess}
        style={{
          '--ds-button-background': 'var(--ds-green-400)',
          '--ds-button-hover-background': 'var(--ds-green-500)'
        }}
      >
        success
      </Button>
      <Button
        onClick={showWarning}
        style={{
          '--ds-button-background': 'var(--ds-yellow-400)',
          '--ds-button-hover-background': 'var(--ds-yellow-500)'
        }}
      >
        warning
      </Button>
      <Button
        onClick={showError}
        style={{
          '--ds-button-background': 'var(--ds-red-400)',
          '--ds-button-hover-background': 'var(--ds-red-500)'
        }}
      >
        error
      </Button>
      <Button
        onClick={showInformation}
        style={{
          '--ds-button-background': 'var(--ds-grey-500)',
          '--ds-button-hover-background': 'var(--ds-grey-700)'
        }}
      >
        information
      </Button>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {}
