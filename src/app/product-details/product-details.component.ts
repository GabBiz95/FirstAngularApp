import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {products} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

// propriete
product;

  constructor(
    //declare route
    private route : ActivatedRoute
    ) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.product = products[params.get('produitId')]
    })
  }

}