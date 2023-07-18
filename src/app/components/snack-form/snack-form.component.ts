import { formatDate } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ISnack } from "src/app/models/snack.model";

@Component({
	selector: "app-snack-form",
	templateUrl: "./snack-form.component.html",
	styleUrls: ["./snack-form.component.scss"],
})
export class SnackFormComponent {
	@Input() snack: ISnack = this.intializeSnack();
	date: string = this.formatDateToDDMMAAAA(new Date());
	time: string = "";
	isntDiet = false;
	@Input() isEdit = false;

	ngOnInit(): void {
		if (this.isEdit) {
			this.date = this.formatDateToDDMMAAAA(this.snack.date);
			this.time = this.formatDateToHHMM(this.snack.time);
			if (!this.snack.isDiet) {
				this.isntDiet = true;
			}
		}
	}

	intializeSnack() {
		return {
			name: "",
			description: "",
			date: new Date(),
			time: new Date(),
			isDiet: null,
		};
	}

	formatDateToDDMMAAAA(date: Date): string {
		const day = date.getDate().toString().padStart(2, "0");
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const year = date.getFullYear().toString();

		return day + month + year;
	}

	formatDateToHHMM(date: Date): string {
		const hours = date.getHours().toString().padStart(2, "0");
		const minutes = date.getMinutes().toString().padStart(2, "0");

		return hours + minutes;
	}

	toogleIsDiet() {
		this.snack.isDiet = true;
		this.isntDiet = false;
	}
	toogleIsntDiet() {
		this.snack.isDiet = false;
		this.isntDiet = true;
	}

	formatDate() {
		this.snack.date = new Date(this.date);
		this.snack.time = new Date(this.date);
		this.snack.time.setHours(Number(this.time.substring(0, 2)));
		this.snack.time.setMinutes(Number(this.time.substring(2)));
	}

	submit() {
		console.log(this.snack);
	}
}

