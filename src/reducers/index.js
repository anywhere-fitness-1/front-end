import {
  SCHEDULE_CLASS,
  UNSCHEDULE_CLASS,
  ADD_PASS,
  EDIT_PASS,
  DELETE_PASS,
  DELETE_CLASS_FAILURE,
  DELETE_CLASS_SUCCESS,
  DELETE_CLASS_START,
  ADD_CLASS_FAILURE,
  ADD_CLASS_SUCCESS,
  ADD_CLASS_START,
  EDIT_CLASS_FAILURE,
  EDIT_CLASS_SUCCESS,
  EDIT_CLASS_START,
  FETCHCLASS_SUCCESS,
  ADD_USER,
  REMOVE_USER,
  GET_CLASSES_START,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_FAILURE,
} from "../actions/index";

const initialState = {
  //holder
  twoClasses: [
    {}
  ],
  classes: [
    {
      id: 1,
      name: "The Murph",
      type: "Crossfit",
      time: "9 am",
      duration: "1 hr",
      intensity: "hard",
      location: "Omaha, NE",
      attendees: "14",
      maxClassSize: "20",
      instructor_id: 1,
    },
    {
      id: 2,
      name: "Vinyasa Flow",
      type: "Yoga",
      time: "7 am",
      duration: "45 mins",
      intensity: "medium",
      location: "Hollywood, FL",
      attendees: "17",
      maxClassSize: "30",
      instructor_id: 2,
    },
    {
      id: 3,
      name: "Boot Camp",
      type: "Cross Training",
      time: "8 am",
      duration: "1 hr",
      intensity: "hard",
      location: "Austin, TX",
      attendees: "9",
      maxClassSize: "16",
      instructor_id: 3,
    }
  ],
  passes: [
    {
      workoutName: "Crossfit at the Beach",
      instructor: "Stephanie",
      client: "Simone",
      classesRemaining: 3,
      id: 0
    },
    {
      workoutName: "Yoga to Fit",
      instructor: "Johnny",
      client: "Byron",
      classesRemaining: 8,
      id: 1
    },
    {
      workoutName: "Cross Training",
      instructor: "Alan",
      client: "Peter",
      classesRemaining: 3,
      id: 2
    },
    {
      workoutName: "Strength 101",
      instructor: "James",
      client: "Max",
      classesRemaining: 7,
      id: 3
    },
    {
      workoutName: "Ab Ripper X",
      instructor: "Jessica",
      client: "Julissa",
      classesRemaining: 4,
    }
  ],
  scheduledClasses: [],
  user: '',
  isFetching: false,
  error: '',
  isPosting: false,
  isEditing: false
};

export const classReducer = (state = initialState, action) => {
  console.log("state", state, "action", action);
  switch (action.type) {

    case FETCHCLASS_SUCCESS:
      return {
        ...state,
        classes: action.payload

      }
    case SCHEDULE_CLASS:
      console.log(state.scheduledClasses)
      return {
        ...state,
        scheduledClasses: [...state.scheduledClasses, action.payload],
        classes: [...state.classes.filter((item, index) => {
          return item !== action.payload;
        })]
      };
    case UNSCHEDULE_CLASS:
      return {
        ...state,
        scheduledClasses: [
          ...state.scheduledClasses.filter((item, index) => {
            return item !== action.payload;
          })
        ],
        classes: [...state.classes, action.payload]
      };
    case ADD_PASS:
      return {
        ...state,
        passes: [...state.passes, action.payload]
      };
    case DELETE_PASS:
      return {
        ...state,
        passes: [
          ...state.passes.filter((item, index) => {
            return item !== action.payload;
          })
        ]
      };
    case EDIT_PASS:
      return {
        ...state,
        passes: state.passes.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      };
    case ADD_CLASS_START:
      return {
        ...state,
        isPosting: true
      };
    case ADD_CLASS_SUCCESS:
      return {
        ...state,
        isPosting: false,
        error: '',
        twoClasses: [...state.twoClasses, action.payload]
      };
    case ADD_CLASS_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.payload.data.Error
      };
    case EDIT_CLASS_START:
      // console.log(state, action);
      return {
        ...state,
        isEditing: true
      }
    case EDIT_CLASS_SUCCESS:
      // console.log(state, action);
      return {
        ...state,
        isEditing: false,
        error: '',
        twoClasses: state.twoClasses.map(item => {
          if (item.id === action.payload.id) {
            return { ...action.payload }
          }
          return item
        })
      };
    case EDIT_CLASS_FAILURE:
      // console.log(state, action);
      return {
        ...state,
        isEditing: false,
        error: action.payload
      };
    case DELETE_CLASS_START:
      return {
        ...state,
        isPosting: true
      };
    case DELETE_CLASS_SUCCESS:
      console.log(state, action, "action.payload", action.payload);
      const filteredClasses = state.classes.filter(c => {
          return c.id !== action.payload
      })
      return {
        ...state,
        isPosting: false,
        error: '',
        classes: filteredClasses,
        twoClasses: state.twoClasses.filter(c => c.id !== action.payload)
      };
    case DELETE_CLASS_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.payload.data.Error
      };
    case GET_CLASSES_START:
      return {
        ...state,
        isFetching: true
      };
    case GET_CLASSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        classes: action.payload,
        twoClasses:
          action.payload.sort((a, b) => a.id - b.id)
      };
    case GET_CLASSES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_USER:
      return {
        ...state,
        user: action.payload
      }
    case REMOVE_USER:
      return {
        ...state,
        user: ''
      }
    default:
      return state;
  }
};