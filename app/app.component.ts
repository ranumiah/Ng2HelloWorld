import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    // This syntax uses the back-tick character (grave accent) and supports multi-line string values as defined in ES2015
    // Text box
    // Property Binding
    // Element Event-Wiring to Component
    // String interpolation
    template: `
        <input type="text"
        [value]="food"
        (input)="foodInput($event)"/>
        <p>Sriracha sauce is great with {{ food }}</p>
    `,
})
export class AppComponent { 
    food = 'kielbasa';

// Notice in the template, the $event argument is passed to the foodInput method.
// Furthermore, look at the typings applied to the method. Both the Event and HTMLInputElement types help you use the API in the method.
// Ultimately, you take the new value from the event arguments and set it to the food property on the component which in turn updates the binding in the template.
// Two-way binding is still around but the Angular framework is designed to support uni-directional (one-way) data patterns more easily out of the box. Read more about the template syntax here.
    foodInput(event: Event) {
        // This represents the argument that you would receive if you had handled the event in the DOM.
        const target = event.target as HTMLInputElement;
        this.food = target.value;
    }
}

// *** moduleId ***
// The moduleId property, when used, is generally set in this fashion. By setting it to module.id, you are supplying the current ECMAScript 2015 module's URL to Angular.
// This helps the framework load external templates and styles from the same relative location (URL) as the component's scripts.

// *** selector ***
// Angular uses the selector property as a CSS selector to query a template finding all the elements that should be initialized as this component.
// For instance, when you use this component in a view, you define it as <my-app></my-app>.
// This selector is a tag selector, because it targets elements by tag name. But you can use other CSS selector types.
// If you prefer to define your components in markup by class (.my-app) or by attribute ([my-app]) simply change the selector accordingly.

// *** template ***
// The template property is the view or markup rendered for the component.
// There are two template-related properties available on the Component decorator: template and templateUrl. The templateUrl property points to a separate file containing the markup.

// The value attribute of the input is surrounded by square brackets []. This is called a property binding because it binds to the property of an element.
// The {{ }} bind to the same component property. This is the interpolation syntax. When changes to the component are made, the expression inside the curly braces is evaluated and the resulting value is coerced to a string and inserted into the DOM.
// To update the value, you wire-up one of the element's events with a method on your component. Instead of wrapping the event name in square brackets [], you wrap it in parentheses ()
// For this example use the input event and create a method on the component class called foodInput to handle the event. This is called an event binding. Your component code should now look like this: