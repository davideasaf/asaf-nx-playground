import { Action } from '@ngrx/store';
import * as ScoreBoard from './scoreboard.actions';
 
export interface ScoreBoardState {
  home: number;
  away: number;
}

export const initialState: ScoreBoardState = {
  home: 0,
  away: 0,
};

export interface ScoreBoardPartialState {
  readonly scoreboard: ScoreBoardState;
}
 
export function scoreboardReducer(state = initialState, action: ScoreBoard.ScoreBoardActionsUnion) {
  switch (action.type) {
    case ScoreBoard.ScoreBoardActionTypes.IncrementHome:
      return {
        ...state, 
        home: state.home + 1
      }
 
    case ScoreBoard.ScoreBoardActionTypes.IncrementAway:
      return {
        ...state, 
        away: state.away + 1
      }
    
    case ScoreBoard.ScoreBoardActionTypes.AddCount:
      return {
        home: state.home + action.payload.home,
        away: state.home + action.payload.away
      }

    case ScoreBoard.ScoreBoardActionTypes.DecrementHome:
      return {
        ...state, 
        home: state.home - 1
      }
 
    case ScoreBoard.ScoreBoardActionTypes.DecrementAway:
      return {
        ...state, 
        away: state.away - 1
      }
    
    case ScoreBoard.ScoreBoardActionTypes.SubractCount:
      return {
        home: state.home - action.payload.home,
        away: state.home - action.payload.away
      }

    case ScoreBoard.ScoreBoardActionTypes.Reset:
    return {
      home: state.home = action.payload.home,
      away: state.home = action.payload.away
    }

    default:
      return state;
  }
}