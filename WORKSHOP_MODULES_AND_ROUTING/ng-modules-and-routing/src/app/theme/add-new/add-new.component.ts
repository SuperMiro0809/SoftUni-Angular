import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  cancelHandler():void {
      this.router.navigate(['/']);
  }

}
