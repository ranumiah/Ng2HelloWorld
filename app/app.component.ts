// import { Component } from '@angular/core';

// @Component({
//     moduleId: module.id,
//     selector: 'my-app',
//     template: `
//         <nav>
//             <a href="/pairing">Pairing</a> | 
//             <a href="/about">About</a>            
//         </nav>
//         <my-pairing></my-pairing>
//     `,
// })
// export class AppComponent { }


import { Component } from '@angular/core';

// The routerLink attribute is a directive instructing Angular to register the click with the router instead of the default href behaviour

// <my-pairing></my-pairing> REPLACED <router-outlet></router-outlet>   ==> This is a place holder where the router renders the component matching the current route
@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <nav>
            <a routerLink="/pairing">Pairing</a> | 
            <a routerLink="/about">About</a>            
        </nav>
        <router-outlet></router-outlet>
    `,
})
export class AppComponent { }