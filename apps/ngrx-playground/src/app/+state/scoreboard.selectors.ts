import { createSelector } from '@ngrx/store';
import { ScoreBoardState, ScoreBoardPartialState } from './scoreboard.reducer';

export const selectScore = (state: ScoreBoardPartialState): ScoreBoardState =>
  state.scoreboard;

export const selectHomeScore = createSelector(
  selectScore,
  (score: ScoreBoardState) => {
    return score.home;
  }
);

export const selectAwayScore = createSelector(
  selectScore,
  (score: ScoreBoardState) => {
    return score.away;
  }
);

export const selectFullScore = createSelector(
  selectScore,
  (score: ScoreBoardState) => {
    console.log('score:', score);
    return score;
  }
);
