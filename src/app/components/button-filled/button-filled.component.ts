import { Component, Input } from "@angular/core";

@Component({
	selector: "btn-filled",
	template: `<button
		class="flex items-center gap-3 px-6 py-4 rounded-lg w-full border-none justify-center bg-baseGray text-white"
	>
		<ng-content></ng-content>
		{{ label }}
	</button>`,
	styles: [],
})
export class ButtonFilledComponent {
	@Input() label!: string;
}

