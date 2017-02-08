import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <nav>
            <a href="/pairing">Pairing</a> | 
            <a href="/about">About</a>            
        </nav>
        <my-pairing></my-pairing>
    `,
})
export class AppComponent { }