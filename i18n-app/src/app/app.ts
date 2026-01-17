import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core'; // Use Pipe + Service

@Component({
  selector: 'app-root',
  standalone: true, // Explicit for clarity
  imports: [RouterOutlet, FormsModule, CommonModule, TranslatePipe], // Plain pipe only
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  password = '';
  email = '';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
