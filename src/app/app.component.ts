import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'mo-app',
  templateUrl: './app.template.html',
  styleUrls: ['./app.styles.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  spinnerHidden: boolean = false;

  constructor(private zone: NgZone) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.spinnerHidden = true;
    }, 2000);
  }
}
