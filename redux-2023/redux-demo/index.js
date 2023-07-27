const redux = require("redux");
const createStore = redux.legacy_createStore;

const BUY_CAKE = "BUY_CAKE";

//Action  creator

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First Redux App",
    };
}

const initialCakeState = {
    numofCakes: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                numofCakes: state.numofCakes - 1,
            };
        default:
            return state;
    }
};

const store = createStore(cakeReducer);
console.log("Inital state", store.getState());
store.subscribe(() => console.log("Updated state", store.getState()));
store.dispatch(buyCake());