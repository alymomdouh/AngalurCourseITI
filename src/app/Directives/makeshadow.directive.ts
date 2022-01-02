import { Directive, ElementRef, HostListener,  Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMakeshadow]'
})
export class MakeshadowDirective implements OnChanges{
@Input('appMakeshadow') BGColor:string="#ccc";
  constructor(private elem:ElementRef) { }
  ngOnChanges(): void {
      this.elem.nativeElement.style="background-color: " + this.BGColor ;
  }
@HostListener('mouseover') onMouseOver()
    {
      //box-shadow': '5px 10px #888888
      this.elem.nativeElement.style = 'box-shadow: 10px 5px orange';
    }

    @HostListener('mouseout') onMouseOut()
    {
      this.elem.nativeElement.style="box-shadow: 5px 10px #888888";
    }
}
