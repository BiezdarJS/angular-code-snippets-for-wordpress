import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHandleLinkClick]'
})
export class HandleLinkClickDirective {

  constructor(private el: ElementRef) {

   }

  @HostListener('click') 
   onClick() {
    this.handleMouseClick();
   }

  


  private handleMouseClick(): boolean {
    let p = this.el.nativeElement.parentNode;
    let i = this.el.nativeElement.querySelector('i');
    console.log(p);
    if (p.children.length > 1) {
      p.classList.toggle('active');
      if (i.classList.contains('fa-plus')) {
        i.classList.remove('fa-plus');
        i.classList.add('fa-minus');
      } else {
        i.classList.add('fa-plus');
        i.classList.remove('fa-minus');
      }
      return false;
    } else {
      return true;
    }
  }


}
