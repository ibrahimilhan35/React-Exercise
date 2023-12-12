/* themeReducer takes two parameters, checks the action type using a switch case, updates the state accordingly, and returns the initial state as a default case. */
const initialState = {
    theme: "light"
};

const themeReducer = (state = initialState, action) => {
    /*Using uppercase for action types is a common convention in Redux to distinguish them from regular variables or other constants */
    switch (action.type) {
        case "DARK": 
            return { theme: "dark" };
        case "LIGHT":
            return { theme: "light" };

        default:
            return state;
    }
};

export default themeReducer;