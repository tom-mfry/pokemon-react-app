# Pokemon Pokedex

The purpose of creating this app was to provide an easy to use interface to search through the pokemon database, with the ability to filter, favourite, and compare cards.

### Frameworks
This app was created using React.js, and Tailwind.css. I found React a great tool, utilizing its component design which was particularly useful when implementing the pokemon card array. I primarily used Tailwind due to its prototyping capabilities and ability to build a good-looking UI quickly. As well as this, I find Tailwind provides an easier and more streamlined solution to responsive UI and its inline styling characteristics provide an easier understanding of the component you're styling.

### Did you have any challenges and if so, how did you overcome them?

When implementing the card 'favourite' feature, originally a 'user-favourite' class was added using `document.querySelector(#'card').toggle("user-favourite")` using an `onClick()` function, however, it was quickly realised that this would apply the class to all pokemon, as all cards had the 'card' class. To resolve this the instance of the specific class was selected using the 'event' attribute to target the specific instance.

### If you had more time, what else would you implement?

Due to time constraints, I was unable to implement the display of each individual pokemon card's stats (HP, ATTACK, DEFENSE, SPECIAL-ATTACK, SPECIAL-DEFENCE SPEED, MOVESET, ABILITIES). The plan for this was to implement a card flipping animation when the 'STATS' button was clicked. Upon this action the card would flip over revealing the pokemon's associated characteristics.

Once again, given more time, the implementation of a card comparing feature would be included. A section for this was included in the current release, however, not fully implemented.

# Getting Started Guide

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
