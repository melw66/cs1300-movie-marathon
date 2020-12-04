# Movie Marathon Application

## Code Structure

All components, style sheets, and movie data are in the src folder. Style sheets are located in the style folder within src.

All movie images are in the img folder in public.

MovieData.js holds an object for all the movie data in the app, which is imported by App.js, the main App component of the app.
The other nested components are in the Components folder in src.

## Components

### FilteredList

This is the main "parent component", which contains the components SearchCriteria, DisplayList, and DisplayMarathon, the 3 components that display the main content of the app. In its state, FilteredList keeps track of the selected sort criteria, whether the filters for language and genre are selected as "show all", whether each filter value is selected or not, and the list of movies the user has selected, as well as the total time in minutes of those selected movies.

### SearchCriteria

This component contains all the radio buttons and checkboxes for the sort/filter criteria of browsing through the movies.

### DisplayList

This component displays each movie in the filtered and sorted list as MovieItem components with the map() function.

### MovieItem

This component defines how a movie and its information are displayed as a card in the filtered and sorted movie list.

MovieItem takes in movieInfo and addMovie() as props. movieInfo is the object that holds the information for the specific movie to be displayed. addMovie() is the callback function that will be called when the user clicks on the "Add to Movie Marathon" button in the MovieItem component. This function is defined in FilteredList, which changes the movie marathon list and corresponding total time stored in its state (only if that movie isn't already in the movie marathon list), which results in the page rerendering so that a new AddedMovie component is now being displayed and the total time is updated to include that movie. This is because DisplayMarathon takes in a list of movies that is the movie marathon list in FilteredList's state, as well as the total time in FilteredList's state.

### DisplayMarathon

This component displays each movie in the movie marathon list as AddMovie components with the map() function.

### AddedMovie

This component defines how a movie and its information are displayed as a card in user's chosen movie marathon list.

AddedMovie takes in movieInfo and removeMovie() as props. movieInfo is the object that holds the information for the specific movie to be displayed. removeMovie() is the callback function that will be called when the user clicks on the "Remove Movie" button in the AddedMovie component. This function is defined in FilteredList, which changes the movie marathon list and corresponding total time stored in its state, which results in the page rerendering so that AddedMovie component is no longer displayed and the total time is updated. This is because DisplayMarathon takes in a list of movies that is the movie marathon list in FilteredList's state, as well as the total time in FilteredList's state.

# React App Set-Up

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
