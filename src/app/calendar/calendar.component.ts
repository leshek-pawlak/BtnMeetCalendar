import {Component} from 'angular2/core';
import {AppState} from '../app.service';

@Component({
  selector: 'calendar',  // <calendar></calendar>
  styles: [ require('./calendar.css') ],
  template: require('./calendar.html')
})
export class Calendar {
  // Set our default values
  localState = { events: [
      {title: 'event dasdasd', description: 'lorem ipusm'},
      {title: 'event ge5tg', description: 'lorem ipusm'},
      {title: 'event 6y3 3', description: 'lorem ipusm'},
      {title: 'event gfd hdfgh', description: 'lorem ipusm'},
      {title: 'event 4hbrtg 5', description: 'lorem ipusm'},
  ] };
  // TypeScript public modifiers
  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('hello `Calendar` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

}
