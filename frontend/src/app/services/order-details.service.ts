import { Injectable } from '@angular/core';
import { IssueService } from '../issue.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
    
    //categories

    categories = [
      {
        id:1,
        categoryName:"Electronics",
        categoryImg:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id:2,
        categoryName:"Fashion",
        categoryImg:"https://images.unsplash.com/photo-1657472545027-1b62e720f41c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
      },
      {
        id:3,
        categoryName:"Health/Beauty",
        categoryImg:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80"
      },
      {
        id:4,
        categoryName:"Home/Garden",
        categoryImg:"https://images.unsplash.com/photo-1657322424957-32ba45d91e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id:5,
        categoryName:"Sports",
        categoryImg:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 "
      },
      {
        id:6,
        categoryName:"Collectibles",
        categoryImg:"https://images.unsplash.com/photo-1483119107169-31558642c29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
      },
      {
        id:7,
        categoryName:"Cars",
        categoryImg:"https://images.unsplash.com/photo-1658373498531-b5e41989e26c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      }


      
    ]
  





}
