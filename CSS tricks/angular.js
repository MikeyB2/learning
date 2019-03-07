//  What are directives and explain attibute directive
Directives are instructions which tell angular to do something.
Directives allow you to attache Behaviour to an element in the DOM.

	import { Directive, ElementRef } from '@angular/core';
@Directive({
	selector: '[highlightMe]'
})

export class MyDirective() {
	constructor(el: ElementRef) {
		el.nativeElement.style.backgroundColor = 'yellow';

	}
}

// also need to import to app.module and add to declarations

// in component html for directive
<div>
	<p highlightMe></p>
</div>

// How many types of directives in angular 2
Component
structural
attribute


// how events are attached to directives
import { Directive, ElementRef } from '@angular/core';
@Directive({
	selector: '[highlightMe]'
})

export class MyDirective() {
	constructor(el: ElementRef) {
		this.el.nativeElement.style.backgroundColor = 'yellow';

	}
	@HostListener('mouseenter') onMouseEnter() {
		this.ghilight('yellow')
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.ghilight('green')
	}
	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}

// also need to import to app.module and add to declarations

// in component html for directive
<div>
	<p highlightMe></p>
</div>

//  how to pass external data into directives
to pass the extrenal data into the directive it means we can pass any data from the different coponents into the directive and it can be done by @Input data binding.

	import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';
@Directive({
	selector: '[highlightMe]'
})

export class MyDirective() {
	constructor(el: ElementRef) {
		this.el.nativeElement.style.backgroundColor = 'yellow';

	}
	ngOnInit() {
		this.highlight(this.defaultColor);
	}
	@Input() defaultColor: string;

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('yellow')
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.highlight('green')
	}
	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}

// also need to import to app.module and add to declarations
import { element } from 'protractor';
import { AppComponent } from './../../angular-crash-todolist/src/app/app.component';

// in component html for directive
<div>
	<p highlightMe defaultColor='blue'></p>
</div>


	// what are structural directives and name a few
	// structural directives are responsible for HTML Layout
	// they shape or reshape the doms structure, typically by adding, removing or manupulating an element

	// *ngFor, *ngIf

	// html template code
	<button (click) = "onBtnClick()" > Show hide welcome message</button >
		<p * ngIf="{count % 2 == 0}" > welcome</p >

// component.ts code for methods in html code
export class AppComponent {
	private count: number = 0;

	private onBtnClick() {
		this.count++;
	}
}