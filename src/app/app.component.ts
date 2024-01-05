import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  recivedData: any[] = [];

  recivedName: string;
  recivedEmail: string;
  recivedPassword: string;

  onUpdate() {
    console.log(
      'name :-',
      this.recivedName,
      'Email :-',
      this.recivedEmail,
      'Passwsord :-',
      this.recivedPassword
    );
  }

  nameChange(val: string) {
    this.recivedName = val;
  }
  emailChange(val: string) {
    this.recivedEmail = val;
  }
  passwordChange(val: string) {
    this.recivedPassword = val;
  }
}
