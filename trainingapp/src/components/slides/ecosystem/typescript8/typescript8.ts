import {Component, View, Inject, ElementRef} from 'angular2/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'typescript8',
	templateUrl:'src/components/slides/ecosystem/typescript8/typescript8.html',
	styleUrls: ['src/components/slides/ecosystem/typescript8/typescript8.css'],
    directives: [Editor, EditorTab]
})
export class Typescript8 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}