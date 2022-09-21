import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { __values } from 'tslib';
OrderDetailsService;

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getCategoryId:any;
  categoryData:any;
  ngOnInit(): void {
    this.getCategoryId = this.param.snapshot.paramMap.get('id');
    console.log(this.getCategoryId,'getcategory');
    if(this.getCategoryId)
    {
       this.categoryData = this.service.categories.filter((value)=>{
        return value.id == this.getCategoryId;
       });
       console.log(this.categoryData,'categorydata>>');
    }
    
  }

}
