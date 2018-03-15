import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      // these do the same thing but second option puts new data a begining of array
      return [ action.payload.data, ...state ];
  }
  return state;
}
