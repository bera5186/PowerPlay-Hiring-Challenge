# Foodie 🍕🍔🍟

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

A food recipe searching app built with react , react hooks , styled components with clean and minimal UI.

Features :
* Search Recipies of any cusine.
* Shows an image, calorific value of a recipie.
* Tags recipies according to high protien , Balanced , High Carbs and Regular.
* Lists out all the ingredients required to make the recipe.

## Running Locally

Clone or Download the repository on your local machine and navigate to project directory in your terminal and run command 

```
npm i
```
Then create a file named keys.js in **src** directory.
```
const keys = {
    "APP_ID": "Your Edamam APP ID here",
    "APP_KEY": "Your Edamam APP key here"
}

export default keys
```
after creating and updating keys, run
```
npm run start
```

