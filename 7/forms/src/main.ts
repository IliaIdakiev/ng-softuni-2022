import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { Provider } from "@angular/core";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { createMyValueProvider } from './providers';

if (environment.production) {
  enableProdMode();
}

const myValueProvider = createMyValueProvider((window as any).test);
platformBrowserDynamic([myValueProvider]).bootstrapModule(AppModule)
  .catch(err => console.error(err));


// class Renderer {
  
// }
// interface IRender<T> {
//   createTextElement(content: string): T;
// }

// class DOMRenderer implements IRender<HTMLElement> {
//   private createElement(elementType: string, content: string): HTMLElement {
//     const el = document.createElement(elementType);
//     el.textContent = content;
//     return el;
//   }

//   createTextElement(content: string): HTMLElement {
//     return this.createElement('p', content);
//   }
// }

// class MDRenderer implements IRender<any> {
//   createTextElement(content: string) {
//     return '```' + content + '```';
//   }
// }

// const render = new MDRenderer();//DOMRenderer();

// const providers: Provider[] = [
//   {
//     provide: Renderer,
//     useClass: DOMRenderer 
//   }
// ];

// const providers2: Provider[] = [
//   {
//     provide: Renderer,
//     useClass: MDRenderer
//   }
// ]

// render.createTextElement('HELL WORD');

