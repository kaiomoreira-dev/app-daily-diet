import { Component, Input } from "@angular/core";

@Component({
	selector: "btn-outline",
	template: `<button
		class=" flex items-center gap-3 px-6 py-4 rounded-lg w-full justify-center border border-baseGray text-baseGray"
	>
		<ng-content></ng-content>
		{{ label }}
	</button> `,
	styles: [],
})
export class ButtonOutlineComponent {
	@Input() label!: string;
}

