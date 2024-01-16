import { Component, OnInit } from '@angular/core';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'trendBazar';
  isLogged:boolean=false
  constructor(private service:StoreService){

  }

  ngOnInit(): void {
    this.service.isAuthenticated.subscribe(res=>this.isLogged=res)
    
  }
}
