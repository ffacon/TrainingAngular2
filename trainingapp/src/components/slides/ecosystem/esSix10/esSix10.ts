import {Component, View, Inject, ElementRef} from 'angular2/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'EsSix10',
	templateUrl:'src/components/slides/ecosystem/esSix10/esSix10.html',
	styleUrls: ['src/components/slides/ecosystem/esSix10/esSix10.css'],
	directives: [Editor, EditorTab]
})
export class EsSix10 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}