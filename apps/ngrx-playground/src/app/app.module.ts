import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { scoreboardReducer } from './+state/scoreboard.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ scoreboard: scoreboardReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
