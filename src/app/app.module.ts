import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
// import {FileUploadModule} from 'primeng/fileupload';
 import {AccordionModule} from 'primeng/accordion';
 import {MenuItem} from 'primeng/api';               
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {SidebarModule} from 'primeng/sidebar';
 import {InputTextModule} from 'primeng/inputtext';
 import {PasswordModule} from 'primeng/password';
 import {ToolbarModule} from 'primeng/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ClientComponent } from './client/client.component';
import { ReadyOrderComponent } from './ready-order/ready-order.component';
import { PersonalOrderComponent } from './personal-order/personal-order.component';
import { MangerComponent } from './manger/manger.component';
import { AboutComponent } from './about/about.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ClientComponent,
    ReadyOrderComponent,
    PersonalOrderComponent,
    MangerComponent,
    AboutComponent,
    TabsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    SidebarModule,
    InputTextModule,
    PasswordModule,
    ToolbarModule,
 
    // FileUploadModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
