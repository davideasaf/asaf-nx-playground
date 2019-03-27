import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ScoreBoardActions from './+state/scoreboard.actions';
import * as ScoreBoardSelectors from './+state/scoreboard.selectors';
import {
  ScoreBoardState,
  ScoreBoardPartialState
} from './+state/scoreboard.reducer';

@Component({
  selector: 'asaf-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  homeScore$: Observable<number>;
  awayScore$: Observable<number>;
  scoreboard$: Observable<ScoreBoardState>;

  constructor(private store: Store<ScoreBoardState>) {
    this.scoreboard$ = this.store.pipe(
      select(ScoreBoardSelectors.selectFullScore)
    );

    this.homeScore$ = this.store.pipe(
      select(ScoreBoardSelectors.selectHomeScore)
    );
    this.awayScore$ = this.store.pipe(
      select(ScoreBoardSelectors.selectAwayScore)
    );
  }

  ngDoCheck() {
    console.log(`ngDoCheck - this.scoreboard\$ ${this.scoreboard$}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - ${JSON.stringify(this.scoreboard$)}`);
  }

  increment(dest: string) {
    if (dest === 'home') {
      this.store.dispatch(new ScoreBoardActions.IncrementHome());
    } else if (dest === 'away') {
      this.store.dispatch(new ScoreBoardActions.IncrementAway());
    }
  }

  decrement(dest: string) {
    if (dest === 'home') {
      this.store.dispatch(new ScoreBoardActions.DecrementHome());
    } else if (dest === 'away') {
      this.store.dispatch(new ScoreBoardActions.DecrementAway());
    }
  }

  reset() {
    this.store.dispatch(new ScoreBoardActions.Reset({ home: 0, away: 0 }));
  }
}
