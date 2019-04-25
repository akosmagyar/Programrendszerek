import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPost= 'NO CONTENT';
  enteredValue= '';

  constructor() { }

  onAddPost = function(){
    //console.dir(postInput);
    this.newPost = this.enteredValue;
  }

  ngOnInit() {
  }

}
