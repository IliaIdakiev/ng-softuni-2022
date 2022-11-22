import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Optional, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]'
})
export class MyRouterLinkDirective implements OnInit, OnDestroy {

  @Input() appMyRouterLink!: string;
  @Input() template!: TemplateRef<any>;

  // (mouseenter)="mouseEnterHandler($event)"
  @HostListener('mouseenter', ['$event']) mouseEnterHandler(e: MouseEvent) {
    console.log('mouse enter', e);
  }

  @HostListener('mouseleave') mouseLeaveHandler2() {
    console.log('mouse leave');
  }

  unsubs: (() => void)[] = [];

  viewHasBeenCreated = false;

  constructor(
    private elementRef: ElementRef,
    private vc: ViewContainerRef,
    private renderer: Renderer2
  ) {
    this.unsubs.push(this.renderer.listen(this.elementRef.nativeElement, 'mouseover', this.mouseOverHandler));
    this.unsubs.push(this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', this.mouseLeaveHandler));
    // this.renderer.setAttribute(this.elementRef.nativeElement, 'data-test', '123');
    // this.renderer.createElement();

    // document.getElementById()
    // document.querySelectorAll()
  }

  ngOnInit(): void {
    console.log(this.appMyRouterLink, this.template);
  }

  mouseOverHandler = (e: MouseEvent) => {
    if (this.viewHasBeenCreated) { return; }
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    this.vc.createEmbeddedView(this.template);
    this.viewHasBeenCreated = true;
  }

  mouseLeaveHandler = (e: MouseEvent) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'initial');
    this.vc.clear();
    this.viewHasBeenCreated = false;
  }

  ngOnDestroy(): void {
    this.unsubs.forEach(fn => fn());
  }

}
