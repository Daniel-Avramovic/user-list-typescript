interface UserType {
    isLoading: boolean,
    users: Array<object>[],
    isListView: boolean,
}

export const usersReducers = (state: UserType = {isLoading: true, isListView: true, users:[]},action:any) => {
    switch(action.type){
        case "setLoading":
            return { ...state, isLoading:action.payload};
        case "setView":
            return{ ...state, isListView:action.payload};
        case "setUsers":
            return { ...state, users:action.payload}
        default:
            return state;
    }
}