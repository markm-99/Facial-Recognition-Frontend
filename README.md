This is an AI Facial Recognition React application that allows users to input an image URL, detect faces using the Clarifai API, displays the detected face with a bounding box, and interacts with the application through sign-in and registration functionalities.

The code is a React application that includes the following key aspects:

1. **Imports**: It imports necessary components and libraries like React, styling files, and custom components such as [FaceRecognition](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#3%2C8-3%2C8), [Navigation](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#4%2C8-4%2C8), [Logo](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#5%2C8-5%2C8), [Rank](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#6%2C8-6%2C8), [ImageLinkForm](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#7%2C8-7%2C8), [ParticlesBg](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#8%2C8-8%2C8), [Signin](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#10%2C8-10%2C8), and [Register](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#11%2C8-11%2C8).

2. **State Initialization**: The [App](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#2%2C11-2%2C11) component initializes its state with properties like [input](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#55%2C13-55%2C13), [imageUrl](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#14%2C37-14%2C37), [box](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#57%2C13-57%2C13), [route](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#58%2C13-58%2C13), [isSignedIn](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#59%2C13-59%2C13), and [user](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#60%2C13-60%2C13).

3. **Functions**:
   - [returnClarifiaiJSONRequest](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#14%2C7-14%2C7): A function that constructs a JSON request object for the Clarifai API based on the provided [imageUrl](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#14%2C37-14%2C37).
   - [displayFaceBox](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#101%2C9-101%2C9): Updates the state with the bounding box information of a detected face.
   - [onInputChange](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#105%2C9-105%2C9): Handles input change events and updates the [input](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#55%2C13-55%2C13) state.
   - [onButtonSubmit](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#110%2C9-110%2C9): Triggers an API call to Clarifai with the input image URL, updates state based on the response, and updates user entries.
   - [componentDidMount](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#136%2C9-136%2C9): Fetches data from a specific endpoint when the component mounts.
   - [loadUser](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#143%2C9-143%2C9): Updates the state with user data.
   - [onRouteChange](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#158%2C5-158%2C5): Handles route changes based on user actions.

4. **Render Method**: Renders the UI based on the current state, displaying components like [Rank](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#6%2C8-6%2C8), [ImageLinkForm](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#7%2C8-7%2C8), [FaceRecognition](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#3%2C8-3%2C8), [Logo](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#5%2C8-5%2C8), [Signin](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#10%2C8-10%2C8), or [Register](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#11%2C8-11%2C8) based on the [route](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#58%2C13-58%2C13) and [isSignedIn](file:///Users/markmathew/Desktop/Facial-Recognition-Frontend/src/App.js#59%2C13-59%2C13) status.

# Getting Started with Create React App

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

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
# Facial-Recognition
# Facial-Recognition
# Facial-Recognition
