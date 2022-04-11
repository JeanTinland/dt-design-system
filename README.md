# Dream Team's Design System (dt-design-system)

Ces composants sont utilisés dans plusieurs plusieurs autres composants présents dans `esf-components` notament (formulaire de contact générique, booking-form, etc...)

## Pour contribuer

Récupérer le projet :

```sh
git clone git@github.com:JeanTinland/dt-design-system.git
```

Jouer les dépendences :

```sh
yarn
```

Démarrer Storybook :

```sh
yarn storybook
```

## Pour pousser les modifications dans le repo & mettre à jour le Storybook

```sh
git add .
git commit -m "Nom du commit"
git push
yarn deploy-storybook
```

## Monter la version du NPM.JS

Mettre à jour la version souhaitée dans `package.json` puis :

```sh
npm publish
```
