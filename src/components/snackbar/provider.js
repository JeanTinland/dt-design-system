import * as React from 'react'
import Snackbar from './snackbar'

const ANIMATION_DELAY = 320
const DEFAULT_DELAY = 4500

const SnackbarContext = React.createContext()

export const useSnackbar = () => {
  const context = React.useContext(SnackbarContext)
  if (!context) throw new Error(`useSnackbar must be used within a SnackbarProvider`)
  return context
}

const SnackbarProvider = (props) => {
  const [snackbar, setSnackbar] = React.useState()
  const [closing, setClosing] = React.useState(false)

  let timer

  const delay = snackbar?.delay || DEFAULT_DELAY

  const hide = () => {
    setClosing(true)
  }

  const show = (options = {}) => {
    clearTimeout(timer)
    setSnackbar(options)
    timer = setTimeout(hide, delay)
  }

  React.useEffect(() => {
    if (snackbar && closing) {
      const timer = setTimeout(() => {
        setSnackbar(undefined)
        setClosing(false)
      }, ANIMATION_DELAY)
      return () => clearTimeout(timer)
    }
  }, [closing, snackbar])

  return (
    <SnackbarContext.Provider value={{ show, hide }} {...props}>
      {props.children}
      {snackbar && <Snackbar {...snackbar} closing={closing} close={hide} />}
    </SnackbarContext.Provider>
  )
}

export default SnackbarProvider
