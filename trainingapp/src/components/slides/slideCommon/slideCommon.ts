import {Component, View, ElementRef} from 'angular2/core';

export abstract class SlideCommon{

	constructor(elt: ElementRef, hostClass: string) {
		console.log('there');
		var classes: any = elt.nativeElement.classList;
		if (!classes.contains(hostClass)) {
			classes.add(hostClass);
		}
	}
	
}