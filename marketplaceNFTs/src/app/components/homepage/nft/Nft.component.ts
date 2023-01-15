import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-nft.components',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.components.component.scss']
})
export class NftsComponent implements OnInit {

 
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getNewNfts()
  }
  Nfts!:any ;

  public getNewNfts(){
    this.productService.getExploreProducts().subscribe(
      data=>{
        this.Nfts=data.slice(0,4);
      });
  }
 

}
