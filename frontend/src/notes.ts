// import { Time } from "@angular/common";
// import { FormBuilder } from "@angular/forms";


// class Person {
//   firstName: string;
//   lastName: string;
//   constructor(public first: string, public last: string) {
//     this.firstName = first;
//     this.lastName = last;
//   }
// }



// interface Item implements Bid{
  
//     name: string;
//     category:string;
//     currency:number;
//     buyPrice:number;
//     firstBid: Bid;
//     numberOfBids: number;
//     Bids:Map<Bid.number,Bid>,



//     constructor(
//       n:string,
//       c:string,
//       cc:number,
//       b:number,
//       fb:Bid,
//       nob:number,
//       bb:Map<Bid.number,Bid>,


    
      
      
      
//       ){
//       this.name = n;
//       this.category = c;
//       this.currency = cc;
//       this.buyPrice = b;
//       this.
//     }
// }



// <div>

// <br>
// <mat-card>
//   <button mat-raised-button color="primary" routerLink="/create">Create New Issue</button>
//   <br><br>
//   <mat-divider></mat-divider>
//   <br>
//   <table mat-table [dataSource]="issues">
//     <ng-container matColumnDef="title">
//       <th mat-header-cell *matHeaderCellDef> Title </th>
//       <td mat-cell *matCellDef="let element"> {{element.title}} </td>
//     </ng-container>

//     <ng-container matColumnDef="responsible">
//       <th mat-header-cell *matHeaderCellDef> Responsible </th>
//       <td mat-cell *matCellDef="let element"> {{element.responsible}} </td>
//     </ng-container>

//     <ng-container matColumnDef="severity">
//       <th mat-header-cell *matHeaderCellDef> Severity </th>
//       <td mat-cell *matCellDef="let element"> {{element.severity}} </td>
//     </ng-container>

//     <ng-container matColumnDef="status">
//       <th mat-header-cell *matHeaderCellDef> Status </th>
//       <td mat-cell *matCellDef="let element"> {{element.status}} </td>
//     </ng-container>

//     <ng-container matColumnDef="actions">
//         <th mat-header-cell *matHeaderCellDef class="mat-column-right"> Actions </th>
//         <td mat-cell *matCellDef="let element" class="mat-column-right">
//           <button mat-button color="primary" (click)="editIssue(element._id)">Edit</button>
//           <button mat-button color="warn" (click)="deleteIssue(element._id)">Delete</button>
//         </td>
//       </ng-container>

//     <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
//     <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
//   </table>
// </mat-card>
// </div>

// import {MatTableModule} from '@angular/material/table';
