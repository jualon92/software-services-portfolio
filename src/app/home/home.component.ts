import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [  MarkdownModule, RouterModule  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
