import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { ISnack } from "src/app/models/snack.model";
import { SnackService } from "src/app/services/snack.service";

@Component({
	selector: "app-edit-snack",
	templateUrl: "./edit-snack.component.html",
	styleUrls: ["./edit-snack.component.scss"],
})
export class EditSnackComponent implements OnInit {
	snack: ISnack = this.intializeSnack();

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private snackService: SnackService
	) {}

	intializeSnack() {
		return {
			name: "Novo",
			description: "Teste",
			date: new Date(),
			time: new Date(),
			isDiet: true,
		};
	}

	ngOnInit(): void {
		// fazer a req e pegar pelo id
		this.route.paramMap.subscribe(params => {
			const id = params.get("id");
			if (id) {
				this.getSnack(id);
				console.log(id);
				this.snack.id = id;
			}
		});
	}

	goBack() {
		this.location.back();
	}

	getSnack(id: string) {
		//		this.snackService.getSnack(id).subscribe(snack => {
		//			this.snack = snack;
		//		});
	}
}

