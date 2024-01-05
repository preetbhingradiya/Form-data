import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
})
export class ChildComponent {

  @Input() formData:any[]=[]

  @ViewChild('register') data:any

  onSubmitt(){
    this.formData.push(this.data.value)
  console.log(this.formData)
  }
}
