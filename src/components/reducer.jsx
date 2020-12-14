
const initialState = {
    showModal : false,
    msg : '',
    showError : false,
    showLoading : false
}

const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'OPEN':
            return{
                showModal : true,
                msg : '',
                showError : true,
                showLoading : false
            };
        case 'CLOSE':
            return{
                showModal : false,
                msg : '',
                showError : false,
                showLoading : false
            };
        case 'SHOW_MESSAGE':
            return{
                showModal : true,
                msg : action.value,
                showError : action.error,
                showLoading : false
            };
        case 'SHOW_LOADING':
            return{
                showLoading : true
            };
        default:
            return state
    }
};


export default reducer;