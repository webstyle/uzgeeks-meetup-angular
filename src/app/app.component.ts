import {Component, OnInit} from '@angular/core';
import {RequestService} from './services/request.service';
import {Requests} from './classes/requests';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: Array<Requests> = [];

  constructor(private request: RequestService) {
  }

  ngOnInit() {
    this.load();
  }

  public load() {
    this.request.getRequests().then((response: Array<Requests>) => this.list = response);
  }

  public accept(id: string) {
    this.request.acceptRequest(id).then(response => this.load());
  }

}
