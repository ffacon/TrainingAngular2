import {Component, View, Inject, ElementRef} from 'angular2/core';

import {SlideCommon} from '../../slideCommon/slideCommon';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'FwksCompare'
})
@View({
	templateUrl:'src/components/slides/preamble/fwksCompare/fwksCompare.html',
	styleUrls: ['src/components/slides/preamble/fwksCompare/fwksCompare.css']
})
export class FwksCompare extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}