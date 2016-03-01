import {Component, Injector, View, Inject, ElementRef} from 'angular2/core';
// import {Injector} from 'angular2/common';


import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'MoreDI2',
	templateUrl:'src/components/slides/mainConcepts/moreDI2/moreDI2.html',
	styleUrls: ['src/components/slides/mainConcepts/moreDI2/moreDI2.css'],
    directives: [Editor, EditorTab]  
})
export class MoreDI2 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}

// let injector= Injector.resolveAndCreate([]);
// injector.get();