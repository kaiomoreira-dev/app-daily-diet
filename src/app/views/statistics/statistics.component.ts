import { Component } from "@angular/core";
import { ISnack } from "src/app/models/snack.model";
import { AuthService } from "src/app/services/auth.service";
import { MetricsService } from "src/app/services/metrics.service";
import { SnackService } from "src/app/services/snack.service";

@Component({
	selector: "app-statistics",
	templateUrl: "./statistics.component.html",
	styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent {
	snacks: ISnack[] = [];
	metricsPercent = 0;
	snacksInDiet = 0;
	snacksOutDiet = 0;
	bestSequency = 0;

	constructor(
		private snackService: SnackService,
		private metricsService: MetricsService,
		private userService: AuthService
	) {}

	ngOnInit(): void {
		this.snackService.getAll().subscribe(snacks => {
			this.snacks = snacks.snacks;
			console.log(snacks);
			this.snacks.map(snack => {
				snack.date = new Date(snack.date);
				snack.time = new Date(snack.time);
			});
			this.metricsPercent = this.metricsService.calculePercentOfSnacks(this.snacks);
			this.snacksInDiet = this.metricsService.getQtdIsDiet(this.snacks);
			this.snacksOutDiet = this.metricsService.getQtdNotIsDiet(this.snacks);
		});
		this.getUser();
	}

	getUser() {
		const user = JSON.parse(localStorage.getItem("user") ?? "");
		console.log(user);
		const id = user.id;
		this.userService.getUser(id).subscribe(user => {
			console.log(user);
			this.bestSequency = user.users.bestSequency;
		});
	}
}

