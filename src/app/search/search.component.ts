import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  input = 'Hi!';

  constructor() {}

  ngOnInit(): void {}

  onChangeEvent(event: any) {
    this.input = event.target.value;
  }
}
