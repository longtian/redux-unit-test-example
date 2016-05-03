import { fromJS } from 'immutable';

const queries = (state = fromJS([]), action) => {
    switch (action.type){
        case 'SET_QUERIES':
            return fromJS(action.payload);
        case 'ADD_QUERY':
            return state.push(action.payload);
        default:
            return state;
    }
};

export default queries;