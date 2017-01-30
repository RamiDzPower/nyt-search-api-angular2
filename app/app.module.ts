import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from  '@angular/forms';
import { HttpModule } from '@angular/http';

/*components*/
import { AppComponent }  from './app.component';
import { NewYorkTimesComponent } from './components/newyorktimes.component';
import { NewYorkTimesViewPostComponent } from './components/newyorktimesviewpost.component';

/*Pipes*/
import { FilterPosts } from './pipes/newyorktimes.filter.pipe';

/* Routing */
import { routing }from './app.routing';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, NewYorkTimesComponent, NewYorkTimesViewPostComponent , FilterPosts ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

