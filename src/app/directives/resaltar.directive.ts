import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[appResaltar]'
})
export class ResaltarDirective implements OnInit {
    constructor(private elRef: ElementRef, private render: Renderer2) { }
    @Input('appResaltar') plan : string = '';
    ngOnInit() {
        if (this.plan === 'pagado') {
            this.render.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
            this.render.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
        }
    }
}
