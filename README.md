[![Build Status](https://travis-ci.org/webcom-components/big-brain-tower.svg?branch=master)](https://travis-ci.org/webcom-components/big-brain-tower)
[![Dependency Status](https://david-dm.org/webcom-components/big-brain-tower.svg)](https://david-dm.org/webcom-components/big-brain-tower)
[![devDependency Status](https://david-dm.org/webcom-components/big-brain-tower/dev-status.svg)](https://david-dm.org/webcom-components/big-brain-tower#info=devDependencies)

# Big brain tower

Brain food for humans ! Be careful, highly addictive !

You didn't know but your brain is already in love with Big Brain Tower ! 

[Try it and adopt it !](https://webcom-components.github.io/big-brain-tower)

## Installation 

1. Get repo with `git clone https://github.com/webcom-components/big-brain-tower.git`

2. Run `npm i` to install dependencies

## Development server

```bash
npm start
```

Go to `http://localhost:8080` and you should see the app running!

## Test the app

Launch tests in console

```bash
npm test
```

Launch tests in console with file watching

```bash
npm run test:watch
```

Launch tests into browser for debugging purposes

```bash
npm run test:debug
```

## [Roadmap](https://trello.com/b/dClcMFGi/big-brain-tower)

## Security rule

To prevent hackers to erase namespace data, provide these security rules into your namespace

```json
{
  "rules": {
    "scores": {
      ".read": true,
      "$score_entry": {
        ".write": " !data.exists() ",
        ".validate": "newData.child('name').isString() && newData.child('val').isNumber()"
      }
    }
  }
}
```


## License

This project is licensed under the MIT license
