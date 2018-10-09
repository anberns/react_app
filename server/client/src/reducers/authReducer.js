// state of user login
import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {

        case FETCH_USER:

            // return data if logged in or false if not
            // "" seen as falsey
            return action.payload || false;

        // null returned indicating unknow login state
        default:
            return state;
    }
}