import * as React from 'react'
import * as Icons from '../components/icons'
import Button from '../components/button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: {
      name: 'ref',
      description: 'Référence React : React.useRef()'
    },
    StartIcon: {
      name: 'StartIcon',
      description: 'Icone (composant React)'
    },
    EndIcon: {
      name: 'EndIcon',
      description: 'Icone (composant React)'
    },
    compact: {
      name: 'compact',
      description: '`boolean` - Version réduite du champ avec moins de padding & taille de police réduite',
      control: 'boolean'
    },
    props: {
      name: 'props',
      description: "Toutes les props de l'élément `button` classiques"
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div className="demo-container">
    <Button {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  children: 'Découvrir'
}

export const Compact = Template.bind({})
Compact.args = {
  compact: true,
  children: 'Découvrir'
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Découvrir',
  disabled: true
}

export const WithStartIcon = Template.bind({})
WithStartIcon.args = {
  StartIcon: Icons.Mail,
  children: 'Envoyer'
}

export const WithEndIcon = Template.bind({})
WithEndIcon.args = {
  EndIcon: Icons.ArrowRight,
  children: 'Je décrouvre'
}

export const IconOnly = Template.bind({})
IconOnly.args = {
  StartIcon: Icons.Plus
}

export const IconOnlyCompact = Template.bind({})
IconOnlyCompact.args = {
  StartIcon: Icons.Plus,
  compact: true
}
