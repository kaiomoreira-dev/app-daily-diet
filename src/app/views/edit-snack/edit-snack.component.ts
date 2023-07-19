import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { ISnack } from "src/app/models/snack.model";
import { SnackService } from "src/app/services/snack.service";
import { map } from "rxjs";

@Component({
	selector: "app-edit-snack",
	templateUrl: "./edit-snack.component.html",
	styleUrls: ["./edit-snack.component.scss"],
})
export class EditSnackComponent implements OnInit {
	snack: ISnack = {
		name: "",
		description: "",
		date: new Date(),
		time: new Date(),
		isDiet: false,
	};

	isInitialized = false;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private snackService: SnackService
	) {}

	ngOnInit() {
		// fazer a req e pegar pelo id
		this.route.paramMap.subscribe(async params => {
			const id = params.get("id");
			if (id) {
				await this.getSnack(id);
				this.snack.date = new Date(this.snack.date);
				this.snack.time = new Date(this.snack.time);
				console.log(this.snack);
			}
		});
		this.isInitialized = true;
	}

	goBack() {
		this.location.back();
	}

	async getSnack(id: string) {
		try {
			const response = await this.snackService.getById(id).toPromise();
			this.snack = response;
		} catch (err) {
			console.error(err);
		}
	}
}

