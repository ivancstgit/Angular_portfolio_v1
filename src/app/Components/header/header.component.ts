import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  datos:any;
  

  constructor(private api:ApiService){
    
    this.api.getPersonas().subscribe(response=>{
      console.log(response);
    })
  }

  ngOnInit(): void {
    
  }

}
