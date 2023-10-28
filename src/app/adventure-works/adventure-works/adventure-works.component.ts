import { CONSTANT_WORKS } from 'src/app.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventure-works',
  templateUrl: './adventure-works.component.html',
  styleUrls: ['./adventure-works.component.css']
})
export class AdventureWorksComponent implements OnInit {

  content = CONSTANT_WORKS;

  constructor() { }

  ngOnInit(): void {
  }

}
