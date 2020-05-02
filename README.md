<!-- @format -->

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Study Notes

### Simple Redux Summary

Set up Action Creator and reducer
Set up connected component with stores
use Enzyme .dive()
to access child component from higher order component
storeFactory
to create a store for each test with app settings

### Redux Thunk

It's a middleware for redux and provides additional functionality. It's a way for us to have more flexibility in our action creators. Intead of creating an action object, the action creator will return a function.

Thunk -> a function that returns a function

Because we're returning a function intead of an action object, we have the ability now to dispatch multiple actions within that function.

It also allows us to access the current state

For example, in this project, thunk can help us always dispatch GUESS*WORD, and conditionally dispatch CORRECT_GUESS. It also allows us to access \_success* picece of state, so we can determine whether or not to dispatch CORRECT_GUESS.

#### Thunk Testing Summary

-   create a store with initial state
-   dispatch action creator
-   check to see if state has been updated
-

### Moxios (mock requests)

Using moxios lets us test app:

1. without testing server and 2) without even running server

#### How moxios work

axios will now send request to moxios instead of http. The test then specifies what moxios response. The test then calls action creator. When action creator calls axios, it uses moxios instead of http for request. The action creator receives moxios resposne from axios, and use that when it runs the rest of the action creators.

Tests calls moxios.install(). It sets moxios as the axios adapter. Routes axios calls to moxios intead of http.

During the test, you'll call moxios.wait(). It watches for axios calls and it sends a response using the callback passed to .wait().

To get the most recent request, use for example, const request = moxios.requests.mostRecent()

Send response using the callbackpassed to .wait(), such as:
request.respondWith({
status: 200,
response: secretWord
})

#### Testing Aysnc Action Creators

-   create store using storeFactory() with initial state
-   Async actions: store.dispatch() returns promise
-   Put tests in .then() callback, and the tests will run after dispatch completes
-   be careful to see tests fail
-   if they don't see the tests fail, it's likely that you didn't return store.dispatch() promise

Note that moxios.wait() is also asynchronous. It's more important than ever to see tests fail. It's very easy for tests to complete before async. Because tests can pass even though assertion fails. If you're not careful, the test can exit before promis resolves.

### Test Redux Components

Test Component Redux Props

-   do components have access to the state they need? the action creators they need?
    Test Action Creator Triggers
-   use mocks to 'spy' on action creators
-   are they called when expected?
