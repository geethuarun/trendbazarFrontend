import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Router } from '@angular/router'; '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  carItemCount:number=0
  constructor(private service:StoreService,private router:Router){


  }
  ngOnInit(): void {
    this.service.cartList().subscribe((data:any)=>this.carItemCount=data.basket_item_count)
  }

  signOut(){
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }

}
