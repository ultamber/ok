import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { CreatebidComponent } from './pages/createbid/createbid.component';
import { FormsModule } from '@angular/forms';
import { IssueService } from './issue.service';
// import { MatToolbarModule, 
//   MatFormFieldModule, 
//   MatInputModule, 
//   MatOptionModule, 
//   MatSelectModule, 
//   MatIconModule, 
//   MatButtonModule, 
//   MatCardModule, 
//   MatTableModule, 
//   MatDividerModule, 
//   MatSnackBarModule } from '@angular/material/button';

@NgModule({ 
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
    SigninpageComponent,
    SignuppageComponent,
    SigninpageComponent,
    CreatebidComponent,
    AppComponent,
    // CreateComponent,
    // EditComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routes),
    // HttpClientModule,
    // MatToolbarModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatOptionModule,
    // MatSelectModule,
    // MatIconModule,
    // MatButtonModule,
    // MatCardModule,
    // MatTableModule,
    // MatDividerModule,
    // MatSnackBarModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
