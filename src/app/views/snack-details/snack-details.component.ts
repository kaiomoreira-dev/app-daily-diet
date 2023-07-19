import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
	isInitialized = false;

	constructor(
		private route: ActivatedRoute,
		private snackService: SnackService,
		private router: Router
	) {}

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
			}
		});
	}

	getSnack(id: string) {
		this.snackService.getById(id).subscribe(response => {
			this.snack = response;
			this.snack.date = new Date(response.date);
			this.snack.time = new Date(response.time);
			this.isInitialized = true;
		});
	}

	formatDate() {
		if (this.snack.date instanceof Date && this.snack.time instanceof Date) {
			return (
				this.snack.date.toLocaleDateString() +
				" às " +
				this.snack.time.toLocaleTimeString().substring(0, 5)
			);
		} else {
			return;
		}
	}

	delete(id: string | undefined) {
		if (id) {
			this.snackService.delete(id).subscribe(response => {
				this.snack = this.intializeSnack();
				this.modalIsOpen = false;
				this.router.navigate(["/"]);
			});
		}
	}
}

