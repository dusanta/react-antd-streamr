# Streamr Network Products App

You can visit the application @ [Streamr Products](https://streamr-app.web.app/).

## Installing Node

You should have installed Node.js to run the application. Visit [Download/Install Node.js](https://nodejs.org/en/download/) to install Node.js in your system of choice (Mac/Linux/Windows) 

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all the required dependencies to run the application.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deploying app to firebase

Please follow the following steps sequentially

### `yarn loginFirebase`

Follow the guidelines in the terminal to log in to the firebase account.

### `yarn initFirebase`

Initializes the firebase configuration files. Here you need to choose the option "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys". And to select the path to deploy you need to type in "build".

### `yarn build`

Builds the project into /build folder

### `yarn deployFirebase`

Deploys to firebase
