This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## App Operations

Login screen <br />
Get all workflows screen<br />
Create/Edit a workflow screen<br />
View/Shuffle a completed workflow in the Create/Edit workflow screen<br />

## Workflows & Nodes

A workflow consists of nodes, arranged in sequential order. Workflows can have only two states, completed or pending. <br />
Each node has two attributes, which can be filled by a user - Title & Content. And three states, which can be modified by a user: Pending, In Progress & Completed.<br />

## Rules & Requirements
A workflow should be considered complete only if all its nodes are in the Completed state. Workflow state is toggleable from the workflow home screen provided it meets the above criteria.<br />
In a workflow there should be no Pending node before a Completed node, i.e nodes can be moved to Completed state only in the same sequential order as they are present in the workflow.<br />
All the nodes in a workflow should editable at all times.<br />
In a workflow, there should not be an empty node.<br />
In a workflow, nodes should be added or deleted only at the end of the sequence.<br />
If a workflow is in a Completed state, the user should be able to perform an action called ‘shuffle’ which will shuffle the order of the nodes in the workflow. The shuffle action should only be visible for Completed workflows. <br />

## UI References 
Use the following screens as the reference, comments are add inline to help you understand the requirements & functionality. You are required to implement the functionality as mentioned in the following references.<br /> 
Login Screen:  [https://imgur.com/JnHbfW](https://imgur.com/JnHbfW) <br />
Workflow Home Screen - Get all workflows screen: [https://imgur.com/kwQjp0S](https://imgur.com/kwQjp0S)<br >
Workflow Create/Edit Screen:[https://imgur.com/JpppsDy](https://imgur.com/JpppsDy)<br />



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
