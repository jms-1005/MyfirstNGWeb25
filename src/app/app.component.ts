import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SocialmediaComponent } from "./socialmedia/socialmedia.component";
import { ContactinfoComponent } from "./contactinfo/contactinfo.component";
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SocialmediaComponent, ContactinfoComponent, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MyfirstNG';
  email:string = "";

  displayEmail(){
    console.log(this.email);
  }
}
