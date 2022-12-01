import { CommonModule } from "@angular/common";
import { Component, Inject, Injectable, ModuleWithProviders, NgModule, Optional, Provider } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

class TheTestClass {
  constructor(private router: Router) { }
}

// const myProvider: Provider = {
//   provide: TheTestClass,
//   useFactory: (router: Router) => {
//     return new TheTestClass(router);
//   },
//   deps: [[Optional, Router]]
// }



//    ('Test': class -> instance )            ('Test': class, instance )
// AppModule (Inj) <--> UserModule (Inj) <--> OtherModule (Inj) <--> ... <--> Cmp 1 (@Inject('Test'))
//                        |
//                        ----> Cmp 2 (@Inject('Test'))


@Component({
  selector: 'app-test',
  template: `<div>HELLO</div>`
})
export class TestCmp {
  constructor(@Inject('Test') value: string) {
    console.log(value);
  }
}


@NgModule({
  declarations: [
    TestCmp
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestCmp,
    // we can also add whole modules here and everything that is inside the exports will be appended here
  ]
})
export class MyModule {

  static forRoot(routers: Routes): ModuleWithProviders<RouterModule> {
    return {
      ngModule: RouterModule,
      providers: [
        {
          provide: 'MAIN_ROUTES',
          useValue: routers
        }
      ]
    };
  }

  static forChildren(routers: Routes): ModuleWithProviders<RouterModule> {
    return {
      ngModule: RouterModule,
      providers: [
        {
          provide: 'CHILD_ROUTES',
          useValue: routers
        }
      ]
    };
  }

  static withProviders(): ModuleWithProviders<MyModule> {
    return {
      ngModule: MyModule,
      providers: [
        {
          provide: 'Test',
          useValue: {}
        }
      ]
    }
  }
}


// static withProviders(): ModuleWithProviders < MyModule > {
//   return {
//     ngModule: MyModule,
//     providers: [

//     ]
//   }
// }
// @NgModule({
//   declarations: [
//     //...
//   ],
//   imports: [
//     MyModule
//   ],
//   bootstrap: [AppComponent]
// })
// class OtherModule {

// }