# Assignment

Build a simple Frontend (using React or any JavaScript technology of your choice) for a “Home
Renovation” calculator tool, that will:

1. Allow the users to choose from various parameters.
2. Display a final result page of the estimated cost.
3. Feel free to get as creative as you want and use any design templates or libraries you think
    are neccessary.

## Parameters for project

Below are the parameters for the project. Please use it for the logic flow and final output for the user.

Questions

  a) Do you have a budget? (Yes/No, with a comment box if Yes)
  b) Are you changing sanitary products? (Yes/No, if yes show the subsequent 3 questions. If No move to question f)
  c) Select your toilet (3 choices)
  d) Select your sink (3 choices)
  e) Select your bathtub (3 choices)
  f) Are you changing your floor tiling? (Yes/No, if yes show the next subsequent question. If No move to the resulting budget)
  g) Do you prefer ceramic or marble floor tiling? (If user chooses ceramic, show question h. If user chooses marble, show question i)
  h) Choose your ceramic (3 choices, prices are per m2)
  i) Choose your marble flooring (3 choices, prices are per m2)
  j) what is the size of your bathroom? (3 choices)

## Result / Lookup Table

Show the resulting budgeting, which adds the user's choices from questions c/d/e plus the user's
choice from question h/i multiplied by the relevant coefficient from user's choice in question j. Show the budget number in green if the value is **lower** thanthe number inputed by the user in question a. Show the budget number in red if it is **higher** thanthe number inputed by the user in question a. Show it in black if it is equal, or if the user answered 'No' to question a.

|  |Economy | Standard | Premium |
|--|--------|----------|---------|
|Sanitary products (combination)|||
|Toilet (USD) | 200 | 1000 | 3000 |
|Sink (USD) | 350 | 700 | 1500 |
|Bathtub (USD) | 800 | 1500 | 4650 |
|Floor tiling (choice) |||
|Ceramic (USD per m2) | 15 | 35 | 75|
|Marble (USD per m2) | 50 | 95 | 150 |


|Bathroom size | Small | Medium | Large |
|--|--------|----------|---------|
|Co-efficient to multiply floor tiling price selected by user (numbers are hidden to the users) | 9 | 12 | 16 |

## Available Scripts

For installing everything just do:

### ```yarn```

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.