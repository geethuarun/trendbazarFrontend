import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { StoreService } from '../services/store.service';




@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  id:any
  product:any
  qty:number=1

  constructor(private route:ActivatedRoute,private service:StoreService,private router:Router){
    this.id=this.route.snapshot.params["id"]
    console.log(this.id);
    

  }
  ngOnInit(): void {
    this.service.retrieveProduct(this.id).subscribe(data=>this.product=data)
  }

  addToBasket(){
    let data={"quantity":this.qty}
    this.service.addToCart(this.id,data).subscribe(data=>this.router.navigateByUrl("/products"))
  }



}
