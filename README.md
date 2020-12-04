# Movie Marathon Application

## Code Structure

All components, style sheets, and movie data are in the src folder. Style sheets are located in the style folder within src.

All movie images are in the img folder in public.

MovieData.js holds an object for all the movie data in the app, which is imported by App.js, the main App component of the app.
The other nested components are in the Components folder in src. App contains FilteredList as its onyl child component, which it passes all the movie data down to as a prop.

## Components

### FilteredList

This is the main "parent component", which contains the components SearchCriteria, DisplayList, and DisplayMarathon, the 3 components that display the main content of the app. In its state, FilteredList keeps track of the selected sort criteria, whether the filters for language and genre are selected as "show all", whether each filter value is selected or not, and the list of movies the user has selected, as well as the total time in minutes of those selected movies.

### SearchCriteria

This component contains all the radio buttons and checkboxes for the sort/filter criteria of browsing through the movies.

Search Criteria takes in many props, with sortRadioButtonChange, genreCheckboxChange, and languageCheckboxChange being the callback functions defined by and passed in from FilteredList that are called when a sort radio button or corresponding filter checkbox changes in its checked value (when the user presses the button/checkbox). These functions change the sort/filter states in FilteredList, which results in rerendering DisplayList to display an updated set of movies. 

The props setAllLanguages and setAllGenres are also callback functions defined by and passed in from FilteredList, which set the corresponding filter back to the default, which also causes a rerendering of DisplayList as sort/filter states in FilteredList change. The corresponding callback function is called when the user clicks on either "All Languages" or "All Genres".

Finally, the props languageChecks and genreChecks are objects mapping filter type to boolean value passed in from FilteredList, which are from FilteredList's state of whether each filter checkbox is checked or not. This is needed, because when the user clicks on "All Languages" or "All Genres" and the states of all of the filters are reset to false (while languageAll or genreAll is set to true), SearchCriteria needs to change the checked values of all checkboxes for that filter category to unchecked. So, when either setAllLanguages() or setAllGenres() is called (explained in previous paragraph), the change in state in FilteredList also cases SearchCriteria to rerender the checked value of the checkboxes if some of them are changed from checked to unchecked.

### DisplayList

This component displays each movie in the filtered and sorted list as MovieItem components with the map() function.

DisplayList taked in list and addMovie() as props. list is the list of movies to be displayed as the filtered and sorted movies. addMovie() is a function defined in FilteredList that is passed as a prop down to MovieItem, which is explained below. Since the movie list passed down to DisplayList as list by FilteredList is a list returned from calling filter() with matchesFilter() as the filter function, DisplayList is rerendered whenever the sort and filter criteria change, due to sort and filter related states changing when the user clicks on different settings in SearchCriteria, as well as matchesFilter() being reliant on those changed states.

### MovieItem

This component defines how a movie and its information are displayed as a card in the filtered and sorted movie list.

MovieItem takes in movieInfo and addMovie() as props. movieInfo is the object that holds the information for the specific movie to be displayed. addMovie() is the callback function that will be called when the user clicks on the "Add to Movie Marathon" button in the MovieItem component. This function is defined in FilteredList, which changes the movie marathon list and corresponding total time stored in its state (only if that movie isn't already in the movie marathon list), which results in the page rerendering so that a new AddedMovie component is now being displayed and the total time is updated to include that movie. This is because DisplayMarathon takes in a list of movies that is the movie marathon list in FilteredList's state, as well as the total time in FilteredList's state.

### DisplayMarathon

This component displays each movie in the movie marathon list as AddMovie components with the map() function.

DisplayMarathon taked in list, removeMovie(), and totalTime as props. list is the list of movies to be displayed as the user's chosen movies, which is the marathonMovies list stored in FilteredList's state, so that whenever that list is updated, DisplayMarathon rerenders an updated list of movies. removeMovie() is a function defined in FilteredList that is passed as a prop down to AddedMovie, which is explained below. totalTime is simply used to display the total time the marathon movies are, which is rerendered when FilteredList's totalTime (in its state) changes, since that is what FilteredList passes down for that prop.

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
