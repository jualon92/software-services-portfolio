import { Component } from '@angular/core';
import { CommentService } from './contact.service';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  commentForm: FormGroup;

  constructor(
    private commentService: CommentService,
    private fb: FormBuilder
  ) {
    this.commentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("pepe",this.commentForm)
    if (this.commentForm.valid) {
      console.log("valid")
      this.commentService.sendComment(this.commentForm.value,).subscribe({
        next: (response) => console.log('Comentario enviado'),
        error: (error) => console.error('Error:', error)
      });
    }
  }
}
