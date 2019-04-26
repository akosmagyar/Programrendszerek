import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>(); //generikus típus

  constructor() { }

  onAddPost = function(form: NgForm) {
    if (form.invalid){
      return;
    }
    const post: Post = { //interfeszt hoztunk letre is itt hasznaljuk
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  };

  onDeletePost = function() { };

  ngOnInit() {}
}
