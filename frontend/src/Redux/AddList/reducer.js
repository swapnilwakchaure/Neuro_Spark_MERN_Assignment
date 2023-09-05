import * as types from "./actionTypes";

const initState = {
    list: [],
    isLoading: false,
    isError: false
}

// action = { type, payload };

const reducer = (state = initState, { type, payload }) => {
    switch (type) {

        // get the list of participants
        case types.GET_TO_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.GET_TO_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: payload,
                isError: false
            }
        case types.GET_TO_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        // post the new participant data into the database
        case types.POST_TO_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.POST_TO_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: [...state.list, payload],
                isError: false
            }
        case types.POST_TO_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        default:
            return state;
    }
}


export { reducer };
