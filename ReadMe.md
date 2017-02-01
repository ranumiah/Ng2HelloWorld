.Net Core Basics

dotnet --version	==> This tells you which version of dotnet core you have installed
dotnet new [Type]	==> This creates a dotnet template based on the type specified i.e console, classlib, web, mvc, webapi, sln, etc
dotnet restore		==> This downloads packages from Nuget, which are need in the project
dotnet run			==> This runs the exe.

NPM
    npm update --save	    ==> Update all packages inside package.json
    npm install	    	    ==> Install all packages define in pacakge.json to node_modules/* folder

Version Range Definition
    version	            ==> Must match version exactly
    >version	        ==> Must be greater than version
    >=version	        ==> Must be greater or equal to the version
    <version	        ==> Must be less than version
    <=version	        ==> Must be less or equal to the version
    ~version	        ==> The Tilde will update the most recent minor version (the middle number)
                            ~1.2.3 ==> >=1.2.3 <1.3.0
                            ~1.2 ==> >=1.2.0 <1.3.0
                            ~1 ==> 1.0.0 < 2.0.0
    ^version	        ==> The Caret will update you to the most recent major version (the first number)
                            ^1.2.3 ==> >=1.2.3 <2.0.0
                            ^0.2.3 ==> >=0.2.3 <0.3.0
                            ^0.0.3 ==> >=0.0.3 <0.0.4
    *	                ==> Matches any version
    ""	                ==> (just an empty string) Same as *
    version1 - version2	==> Same as >=version1 <=version2.
    range1 || range2	==> Passes if either range1 or range2 are satisfied.
    latest	            ==> Obtains latest release

Package.Json
    The dependencies are the libraries that your application uses at runtime.
    The devDependencies are libraries you use during your build.
    Shim    ==> It is a piece of code that implements language features not natively supported by the browser.
    TypeScript    ==> It provides Optional Static Typing, Classe, and Interfaces. It is the transpiler used by SystemJS, which it uses to transpile TypeScript into JavaScript

The dependencies section of package.json contains:
    Features    ==> Feature packages give the application framework and utility capabilities.
    Polyfills   ==> Polyfills plug gaps in the browser's JavaScript implementation.
    Other       ==> Other libraries that support the application such as bootstrap for HTML widgets and styling.

Feature Packages
    @angular/core                       ==>  Critical runtime parts of the framework needed by every application. Includes all metadata decorators, Component, Directive, dependency injection, and the component lifecycle hooks.
    @angular/common                     ==> The commonly needed services, pipes, and directives provided by the Angular team.
    @angular/compiler                   ==> Angular's Template Compiler. It understands templates and can convert them to code that makes the application run and render. Typically you don’t interact with the compiler directly; rather, you use it indirectly via platform-browser-dynamic or the offline template compiler.
    @angular/platform-browser           ==> Everything DOM and browser related, especially the pieces that help render into DOM. This package also includes the bootstrapStatic method for bootstrapping applications for production builds that pre-compile templates offline.
    @angular/platform-browser-dynamic   ==> Includes Providers and a bootstrap method for applications that compile templates on the client. Don’t use offline compilation. Use this package for bootstrapping during development and for bootstrapping plunker samples.
    @angular/http                       ==> Angular's http client.
    @angular/router                     ==> Component router.
    @angular/upgrade                    ==> Set of utilities for upgrading AngularJS applications to Angular.
    system.js                           ==> Acts as a shim for a dynamic module loader compatible with the ES2015 module specification. Other viable choices include the well-regarded webpack.

Polyfill Packages
    core-js	            ==> Corejs in simple words it just fills the gap between different versions of ECMA. Suppose you have written code in ECMA6 and you want to run it in browser where it does not support ECMA6 then core-js comes into picture.
    zone.js	            ==> “A Zone is an execution context that persists across async tasks”. In Simple Words Zone wraps all async tasks into one unit.
    reflect-metadata	==> is used to enable dependency injection through decorators.
    rxjs	            ==> RxJS (Reactive Extensions for JavaScript) is a library for Observables. This lets you “fire this promise chain every time some data arrives”

Other Packages
    angular-in-memory-web-api	==> An Angular-supported library that simulates a remote server's web api without requiring an actual server or real http calls. Good for demos, samples, and early stage development (before we even have a server).
    bootstrap	                ==> Bootstrap is a popular HTML and CSS framework for designing responsive web apps. Some of the samples improve their appearance with bootstrap.

DevDependencies Packages
    concurrently	        ==> A utility to run multiple npm commands concurrently on OS/X, Windows, and Linux operating systems.
    typescript	            ==> the TypeScript language server, including the tsc TypeScript compiler.
    @types/*	            ==> TypeScript definition files. Learn more about it in the TypeScript Configuration chapter.
