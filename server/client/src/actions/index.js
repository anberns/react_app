// action creator
import axios from 'axios';
import { FETCH_USER } from './types';

// with arrow function, if only one statement, 
// you can remove the {} and return 
// also if only one argument, you can remove ()
export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    
    // payload only response data ie id
    dispatch({ type: FETCH_USER, payload: res.data });
};
