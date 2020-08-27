import { axiosWithAuth } from '../utils/axiosWithAuth'

//Schedule/Unschedule
export const SCHEDULE_CLASS = 'SCHEDULE_CLASS';
export const UNSCHEDULE_CLASS = 'UNSCHEDULE_CLASS';

//Passes
export const ADD_PASS = 'ADD_PASS';
export const DELETE_PASS = 'DELETE_PASS';
export const EDIT_PASS = 'EDIT_PASS';

//Logout
export const LOGOUT = 'LOGOUT';

//Instructor Class Functions
export const ADD_I_CLASS = 'ADD_I_CLASS';
export const EDIT_I_CLASS = 'EDIT_I_CLASS';
export const DELETE_I_CLASS = 'DELETE_I_CLASS';

 //User Functions
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER'

//Fetch Data
export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const FETCHCLASS_SUCCESS = 'FETCHCLASS_SUCCESS'

//Classes
export const GET_CLASSES_START = 'GET_CLASSES_START';
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS';
export const GET_CLASSES_FAILURE = 'GET_CLASSES_FAILURE';

export const DELETE_CLASS_START = 'DELETE_CLASS_START';
export const DELETE_CLASS_SUCCESS = 'DELETE_CLASS_SUCCESS';
export const DELETE_CLASS_FAILURE = 'DELETE_CLASS_FAILURE';

export const ADD_CLASS_START = 'ADD_CLASS_START';
export const ADD_CLASS_SUCCESS = 'ADD_CLASS_SUCCESS';
export const ADD_CLASS_FAILURE = 'ADD_CLASS_FAILURE';

export const EDIT_CLASS_START = 'EDIT_CLASS_START';
export const EDIT_CLASS_SUCCESS = 'EDIT_CLASS_SUCCESS';
export const EDIT_CLASS_FAILURE = 'EDIT_CLASS_FAILURE';


export const scheduleClass = scheduleClass => {
    return { type: SCHEDULE_CLASS, payload: scheduleClass }
}
export const unscheduleClass = unscheduleClass => {
    return { type: UNSCHEDULE_CLASS, payload: unscheduleClass }
}

export const addPass = newPass => {
    return { type: ADD_PASS, payload: newPass }
}
export const deletePass = id => {
    return { type: DELETE_PASS, payload: id }
}
export const editPass = id => {
    return { type: EDIT_PASS, payload: id }
}
export const fetchClasses = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
        .get("/classes")
        .then(res => {
            console.log(res, "CLASS get");
            dispatch({ type: FETCHCLASS_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
}

export const logOut = () => {
    return { type: LOGOUT }
}

export const getIClasses = () => dispatch => {
    dispatch({ type: GET_CLASSES_START });
    axiosWithAuth()
        .get(`/classes`)
        .then(res => {
             (console.log(`getClasses:`, res))
            dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data })
        })
        .catch(err => {
             (console.log(`getClasses:`, err))
            dispatch({ type: GET_CLASSES_FAILURE, payload: err.response })
        });
}

export const addIClass = newIClass => dispatch => {
    dispatch({ type: ADD_CLASS_START })
    axiosWithAuth()
        .post('/classes', newIClass)
        .then(res => {
            console.log("adding", res)
            dispatch({ type: ADD_CLASS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.message)
            dispatch({ type: ADD_CLASS_FAILURE, payload: err.response })
        })
}

export const deleteIClass = id => dispatch => {
    dispatch({ type: DELETE_CLASS_START });
    axiosWithAuth()
        .delete(`/classes/${id}`)
        .then(res => {
             console.log(`Delete IClasses:`, res)
            dispatch({ type: DELETE_CLASS_SUCCESS, payload: id })
        })
        .catch(err => {
            dispatch({ type: DELETE_CLASS_FAILURE, payload: err.response })
        });
};

export const editIClass = editIClass => dispatch => {
    dispatch({ type: EDIT_CLASS_START });
    axiosWithAuth()
        .put(`/classes/${editIClass.id}`, editIClass)
        .then(res => {
            console.log(`Edit IClasses:`, res)
            dispatch({ type: EDIT_CLASS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: EDIT_CLASS_FAILURE, payload: err.response })
        })
}

export const addUser = user => {
    return { type: ADD_USER, payload: user }
}

export const removeUser = user => {
    return { type: REMOVE_USER }
}