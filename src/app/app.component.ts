import { Component } from '@angular/core';
import { ApiService } from './Services/api.service';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'Oficial_FrontEnd';
  constructor(public authService:AuthService, public api:ApiService){
    
  }

  ngOnInit(){
    /*
    this.api.getAll().subscribe(response => {
      console.log("Res:", response);
    });*/
  }
}
