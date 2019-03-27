import { Action } from '@ngrx/store';
 
export enum ScoreBoardActionTypes {
  IncrementHome = '[Scoreboard Component] IncrementHome',
  IncrementAway = '[Scoreboard Component] IncrementAway',
  AddCount = '[Scoreboard Component] AddCount',

  DecrementHome = '[Scoreboard Component] DecrementHome',
  DecrementAway = '[Scoreboard Component] DecrementAway',
  SubractCount = '[Scoreboard Component] AddCount',

  Reset = '[Scoreboard Component] Reset',
}
 
export class IncrementHome implements Action {
  readonly type = ScoreBoardActionTypes.IncrementHome;
}

export class IncrementAway implements Action {
  readonly type = ScoreBoardActionTypes.IncrementAway;
}

export class AddCount implements Action {
  readonly type = ScoreBoardActionTypes.AddCount;
  constructor(public payload: {home: number, away: number}) {}
}
 
export class DecrementHome implements Action {
  readonly type = ScoreBoardActionTypes.DecrementHome;
}

export class DecrementAway implements Action {
  readonly type = ScoreBoardActionTypes.DecrementAway;
}

export class SubractCount implements Action {
  readonly type = ScoreBoardActionTypes.SubractCount;
  constructor(public payload: {home: number, away: number}) {}
}
 
export class Reset implements Action {
  readonly type = ScoreBoardActionTypes.Reset;
  constructor(public payload: {home: number, away: number}) {}
}



export type ScoreBoardActionsUnion = IncrementHome | 
IncrementAway | 
AddCount | 
DecrementHome | 
DecrementAway |
SubractCount |
Reset;
