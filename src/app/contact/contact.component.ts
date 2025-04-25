import { Component } from '@angular/core';
import { ContactinfoComponent } from "../contactinfo/contactinfo.component";
import { SocialmediaComponent } from "../socialmedia/socialmedia.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ContactinfoComponent, SocialmediaComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  name: string = '';
  email:string = '';
  message:string = '';

  user:string = "May Julian";
  title:string = "My Contact Page";

  type:string = "email";
  myTitle:string = "Bill Gates";
  status:string = "offline";
  emailStyle:string="disabled";
  fontColor:string = "blue";
  emailPadding:string="20px";

  submit(){
    let customerInfo = {
      customerName: this.name,
      customerEmail: this.email,
      customerMessage: this.message
    }
    console.log(customerInfo);
  }

}
