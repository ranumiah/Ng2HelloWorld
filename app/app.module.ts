import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PairingComponent } from './pairing.component';
import { AboutComponent } from './about.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
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