import { formatDate } from "@angular/common";
import { Component, Input, OnChanges } from "@angular/core";
import { ISnack } from "src/app/models/snack.model";
import { SnackService } from "src/app/services/snack.service";

@Component({
	selector: "app-snack-form",
	templateUrl: "./snack-form.component.html",
	styleUrls: ["./snack-form.component.scss"],
})
export class SnackFormComponent implements OnChanges {
	@Input() snack: ISnack = this.intializeSnack();
	date: string = this.formatDateToDDMMAAAA(new Date());
	time: string = "";
	isntDiet = false;
	@Input() isEdit = false;

	constructor(private snackService: SnackService) {}

	ngOnInit(): void {}

	ngOnChanges() {
		console.log(this.snack);
		if (this.isEdit) {
			this.date = this.formatDateToDDMMAAAA(this.snack.date);
			this.time = this.formatDateToHHMM(this.snack.time);
			if (this.snack.isDiet === 1) {
				this.snack.isDiet = true;
				if (!this.snack.isDiet) {
					this.isntDiet = true;
				}
			}

			if (this.snack.isDiet === 0) {
				this.snack.isDiet = false;
				if (!this.snack.isDiet) {
					this.isntDiet = true;
				}
			}
		}
	}

	intializeSnack() {
		return {
			name: "",
			description: "",
			date: new Date(),
			time: new Date(),
			isDiet: false,
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
	formatDateToAAAA_MM_DD(dateString: string): string {
		const day = dateString.slice(0, 2);
		const month = dateString.slice(2, 4);
		const year = dateString.slice(4, 8);

		const formattedDate = `${year}-${month}-${day}`;

		const date = new Date(formattedDate);
		date.setDate(date.getDate() + 1);

		const formattedDateWithAddedDay = date.toISOString().slice(0, 10);

		return formattedDateWithAddedDay;
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
		this.date = this.formatDateToAAAA_MM_DD(this.date);
		this.snack.date = new Date(this.date);
		this.snack.time = new Date(this.date);
		this.snack.time.setHours(Number(this.time.substring(0, 2)));
		this.snack.time.setMinutes(Number(this.time.substring(2)));
	}

	submit() {
		this.formatDate();
		console.log(this.snack);

		if (!this.isEdit) {
			this.snackService.create(this.snack).subscribe(data => {
				console.log(data);
			});
		} else {
			this.snackService
				.update(this.snack.id ? this.snack.id : "", this.snack)
				.subscribe(data => {
					console.log(data);
				});
		}
	}
}

