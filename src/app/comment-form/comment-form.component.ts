import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { Comment } from '../comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<Partial<Comment>> = new BehaviorSubject({});

  @Output()
  formValuesChanged = new EventEmitter<Comment>();

  @Output()
  formSubmitted = new EventEmitter<Comment>();

  commentForm = new FormGroup({});

  get name() { return this.commentForm.get('name')!; }
  get text() { return this.commentForm.get('text')!; }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialState.subscribe(comment => {
      this.commentForm = this.fb.group({
        name: [ comment.name, [Validators.required] ],
        text: [ comment.text, [ Validators.required, Validators.minLength(5) ] ],
      });
    });

    this.commentForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  submitForm() {
    this.formSubmitted.emit({
      ...this.commentForm.value,
      date: new Date()
    });
  }
}
