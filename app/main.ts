//document.body.innerHTML = 'Hello, TypeScript World!';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// This is using (JIT) compilation in the browser with platformBrowserDynamic to bootstrap the AppModule.
platformBrowserDynamic().bootstrapModule(AppModule);