import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PairingComponent } from './pairing.component';
import { AboutComponent } from './about.component';

// Define Routing
// The pathMatch property must be set for all redirects. In this case, the value 'full' denotes that the redirect should occur when the path is at the application root or is otherwise empty ('')
const routes: Routes = [
    { path: '', redirectTo: '/pairing', pathMatch: 'full' },
    { path: 'pairing', component: PairingComponent },
    { path: 'about', component: AboutComponent },
];

// RouterModule.forRoot(routes) ==> Register Routes to Angular
@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
    ],
    declarations: [
        AppComponent,
        PairingComponent,
        AboutComponent,
    ],
})
export class AppModule { }

// All the configuration occurs in the NgModule decorator. The bootstrap property is only necessary in this root NgModule.
// It instructs Angular to examine the existing DOM (parsed from index.html in this case), identifying the elements to replace with the components defined in bootstrap.
// The imports property defines any NgModules that are consumed by this NgModule. Being this root NgModule is running in a browser, you must import the BrowserModule.
// The other NgModules in your application do not need to import that BrowserModule, only the root NgModule.
// Finally, you declare all of the Components and Directives that belong to this NgModule in declarations.
// There are several other important properties with the NgModule decorator so refer to the documentation for more information.