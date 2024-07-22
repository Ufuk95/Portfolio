import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appVisibleOnScroll]',
  standalone: true
})
export class VisibleOnScrollDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (this.el.nativeElement.classList.contains('contactInput')) {
            this.renderer.addClass(this.el.nativeElement, 'slide-in');
          }
          else if (this.el.nativeElement.classList.contains('firstButton')) {
            this.renderer.addClass(this.el.nativeElement, 'rotate');
          } else {
            this.renderer.addClass(this.el.nativeElement, 'visible');
          }
          observer.unobserve(this.el.nativeElement); // Unobserve after the class is added to prevent re-triggering
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% of the element is in view
    });

    observer.observe(this.el.nativeElement);
  }
}
