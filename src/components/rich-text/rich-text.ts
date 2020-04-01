
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";


@Component({
    selector: 'rich-text',
    templateUrl: 'rich-text.html'
})
export class RichTextComponent {

    bold = false;
    italic = false;
    underline = false;
    normal = false;
    h1 = false;
    h2 = false;
    numbering = false;
    bullet = false;
    img_bullet = "assets/img/editor/tree-black.svg";
    img_numbering = "assets/img/editor/numbering-black.svg";
    // @ViewChild('decora')
    constructor(
    ) {

    }

    @ViewChild('editor') editor: ElementRef;
    @ViewChild('decorate') decorate: ElementRef;
    @ViewChild('styler') styler: ElementRef;

    @Input() formControlItem: FormControl;

    @Input() placeholderText: string;


    getPlaceholderText() {
        if (this.placeholderText !== undefined) {
            return this.placeholderText
        }
        return '';
    }

    uniqueId = `editor${Math.floor(Math.random() * 1000000)}`;

    private stringTools = {
        isNullOrWhiteSpace: (value: string) => {
            if (value == null || value == undefined) {
                return true;
            }
            value = value.replace(/[\n\r]/g, '');
            value = value.split(' ').join('');

            return value.length === 0;
        }
    };

    private updateItem() {
        console.log("updated")
        const element = this.editor.nativeElement as HTMLDivElement;
        element.innerHTML = this.formControlItem.value;

        // if (element.innerHTML === null || element.innerHTML === '') {
        //   element.innerHTML = '<div></div>';
        // }

        const reactToChangeEvent = () => {

            if (this.stringTools.isNullOrWhiteSpace(element.innerText)) {
                element.innerHTML = '<div></div>';
                this.formControlItem.setValue(null);
            } else {
                this.formControlItem.setValue(element.innerHTML);
            }
        };

        element.onchange = () => reactToChangeEvent();
        element.onkeyup = () => reactToChangeEvent();
        element.onpaste = () => reactToChangeEvent();
        element.oninput = () => reactToChangeEvent();
    }

    private wireupButtons() {
        // this.render_decorate.
        let buttons = (this.decorate.nativeElement as HTMLDivElement).getElementsByTagName('button');
        for (let i = 0; i < buttons.length; i++) {
            let button = buttons[i];

            let command = button.getAttribute('data-command');

            console.log("data-command", command);
            // document.execCommand("bold");

            if (command.includes('|')) {
                let parameter = command.split('|')[1];
                command = command.split('|')[0];


                button.addEventListener('click', () => {
                    let active = document.execCommand(command, true, parameter);

                    console.log("data-command", command, parameter, active);

                    if (parameter == '<h1>') {
                        if (this.h1 == false) {
                            this.h1 = true;
                            this.h2 = false;
                            this.normal = false;
                        } else {
                            this.h1 = false;
                        }
                    }

                    if (parameter == '<strong>') {
                        if (this.h1 == false) {
                            this.h1 = true;
                            this.h2 = false;
                            this.normal = false;
                        } else {
                            this.h1 = false;
                        }
                    }

                    if (parameter == '<h2>') {
                        if (this.h2 == false) {
                            this.h2 = true;
                            this.h1 = false;
                            this.normal = false;
                        } else {
                            this.h2 = false;
                        }
                    }

                    if (parameter == '<p>') {
                        if (this.normal == false) {
                            this.normal = true;
                            this.h1 = false;
                            this.h2 = false;
                        } else {
                            this.normal = false;
                        }
                    }
                });
            } else {

                button.addEventListener('mousedown', (e) => {

                    const element = this.editor.nativeElement as HTMLDivElement;
                    element.focus();

                    let active = document.execCommand(command);
                    console.log("data-command", command, active);

                    if (command == 'bold') {
                        if (this.bold == false) {
                            this.bold = true;
                        } else {
                            this.bold = false;
                        }
                    }

                    if (command == 'italic') {
                        if (this.italic == false) {
                            this.italic = true;
                        } else {
                            this.italic = false;
                        }
                    }

                    if (command == 'underline') {
                        if (this.underline == false) {
                            this.underline = true;
                        } else {
                            this.underline = false;
                        }
                    }

                    if (command == 'insertOrderedList') {
                        if (this.numbering == false) {
                            this.numbering = true;
                            this.img_numbering = 'assets/img/editor/numbering-blue.svg';
                            this.bullet = false;
                            this.img_bullet = 'assets/img/editor/tree-black.svg';
                        } else {
                            this.numbering = false;
                            this.img_numbering = 'assets/img/editor/numbering-black.svg';
                        }
                    }

                    if (command == 'insertUnorderedList') {
                        if (this.bullet == false) {
                            this.bullet = true;
                            this.img_bullet = 'assets/img/editor/tree-blue.svg';
                            this.numbering = false;
                            this.img_numbering = 'assets/img/editor/numbering-black.svg';
                        } else {
                            this.bullet = false;
                            this.img_bullet = 'assets/img/editor/tree-black.svg';
                        }
                    }

                    e.preventDefault();
                });
            }
        }

    }

    ngAfterContentInit() {

        this.updateItem();
        this.wireupButtons();

    }

}
