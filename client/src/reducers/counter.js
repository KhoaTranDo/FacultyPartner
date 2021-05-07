const CouterReducer=(state=0,action)=>{
    switch (action.type) {
        case 'INCREATED':
            return state+1;
        case 'DECREATED':
            return state-1;
        default:
            return state;
    }
}
export default CouterReducer;