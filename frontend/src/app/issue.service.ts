import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatebidComponent } from './pages/createbid/createbid.component';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  uri = 'http://localhost:5000';

  constructor(private http: HttpClient) {}
  getIssues() {
    return this.http.get(`${this.uri}/profile`);
  }

  getIssueById(id: any) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  getUserbyId(id: any) {
    return this.http.get(`${this.uri}/profile/${id}`);
  }

  getAuctionbyId(id: any) {
    return this.http.get(`${this.uri}/user/${id}`);
  }

  updateUser(
    id: any,
    firstName: any,
    lastName: any,
    address: any,
    VAT: any,
    phoneNumber: any
  ) {
    const issue = {
      firstName,
      lastName,
      address,
      VAT,
      phoneNumber,
    };
    return this.http.post(`${this.uri}/profile/${id}`, issue);
  }
  
  deleteAuction(id: any){
    return this.http.delete(`${this.uri}/auction/${id}`);
  }
  
  createbid(priceValue: any ){
    const issue = {
      priceValue: priceValue
    };
    return this.http.post(`${this.uri}/bid`,issue);
  }
  
  createAuction(title: any, description: any, endTime: any, startPrice: any, category: any, currency: any ){
    const auction = {
      title,
      description,
      endTime,
      startPrice,
      category,
      currency,
    };
    return this.http.post(`${this.uri}/createauction` , auction);
  }

  getAllAuctions(){
    return this.http.get(`${this.uri}/auctions`);
  }

  // getActiveAuctions



  // getActiveBids



  // 
}


