import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppComponent } from '../app.component';
import { MyClass, myCustomToken } from '../app.module';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [

  ]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit, OnChanges {

  @Input() users!: { name: string }[];

  constructor(
    private cdRef: ChangeDetectorRef,
    private injector: Injector
  ) {
    this.cdRef.detach();

    const value = this.injector.get(myCustomToken, null);
    const appCmp = this.injector.get(AppComponent);
    console.log(value, appCmp);
  }

  ngOnChanges(): void {
    if (this.users.length > 4) {
      this.cdRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.cdRef.detectChanges();
  }

}
