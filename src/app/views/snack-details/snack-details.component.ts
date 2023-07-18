import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ISnack } from "src/app/models/snack.model";
import { SnackService } from "src/app/services/snack.service";

@Component({
	selector: "app-snack-details",
	templateUrl: "./snack-details.component.html",
	styleUrls: ["./snack-details.component.scss"],
})
export class SnackDetailsComponent {
	snack: ISnack = this.intializeSnack();
	modalIsOpen = false;

	constructor(private route: ActivatedRoute, private snackService: SnackService) {}

	intializeSnack() {
		return {
			name: "Novo",
			description: "Teste",
			date: new Date(),
			time: new Date(),
			isDiet: false,
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

	getSnack(id: string) {
		//		this.snackService.getSnack(id).subscribe(snack => {
		//			this.snack = snack;
		//		});
	}

	formatDate() {
		return (
			this.snack.date.toLocaleDateString() +
			" às " +
			this.snack.time.toLocaleTimeString().substring(0, 5)
		);
	}
}

