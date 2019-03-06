// boiler plate functional component with the base ReactDOM.render() method where all your components will render.
import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
    return (
        <div>
            <h1>Mike Bryant</h1>
            <p>This is a paragraph about me...</p>
            <ul>
                <li>Thailand</li>
                <li>Japan</li>
                <li>Nordic Countries</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))


// create a component MyInfo that will replace the JSX above and then you can import this Functional component into any other component

import React from 'react'

function MyInfo() {
    return (
        <div>
            <h1>Mike Bryant</h1>
            <p>This is a paragraph about me...</p>
            <ul>
                <li>Thailand</li>
                <li>Japan</li>
                <li>Nordic Countries</li>
            </ul>
        </div>
    )
}

export default MyInfo;








// What are smoke tests?
Components render something without throwing an error


// When would you choose to use shallow and full-DOM rendering?
Shawllow rendering is when you render just one component.Any child components aren't expanded, and their output cannot be inspected.
In full DOM rendering, the entire component including its children are rendered into an in -memory DOM.If the feature you are trying to test uses any of the following features or techniques, then you will need to use full DOM rendering rather than shallow rendering:
Refs
Lifecycle methods
Directly interacting with DOM APIs


// Imagine you could only test one of your actions, or your reducers. Which would you choose and why?

// What does the exact prop of the Route component do?
This specifies that the route has to exactly match in order for the component to display.
< Route exact path = "/" component = { Home } />



    // Explain this syntax in the context of an async action: const actionName = () => dispatch => {
    It is an async action that instead of returning an object for the action creator it returns a call back function.The action is dispatched is will be called by a middleware usually Redux thunk which then passes the dispatch method.

export const fetchBoard = () => dispatch => {
    fetch(`${API_BASE_URL}/board`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(board => {
        dispatch(fetchBoardSuccess(board));
    });
};


// What conditions should you check to make sure that a user is providing valid registration information? Which of these can be checked on the frontend?

// Which header do you need to set to provide a JWT token as credentials to an endpoint? What should the header value look like.
Authorization: `Bearer ${authToken}`

// What is the purpose of refreshing a JWT, and when do we do it?
So that the user doesnt have to login everytime the visit the app.

// Complete the test in src/components/button.test.js to assert that the onClick callback is fired when the button is clicked.

// Write the fetchRepos async action in src/actions.js, which should make a GET request to https://api.github.com/users/dhh/repos, following the Request/Success/Error pattern.

// Update this component so the form fields are stored in Redux using Redux Form.