export const setLoading = (input:boolean) => {
    return(dispatch:any) => {
        dispatch({
            type:'setLoading',
            payload:input
        })
    };
};

export const setView = (input:boolean) => {
    return(dispatch:any) => {
        dispatch({
            type: 'setView',
            payload:!input,
        })
    }
}