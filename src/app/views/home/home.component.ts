import { Component, OnInit } from "@angular/core";
import { ISnack } from "src/app/models/snack.model";
import { MetricsService } from "src/app/services/metrics.service";
import { SnackService } from "src/app/services/snack.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	snacks: ISnack[] = [];
	metricsPercent = 0;

	constructor(
		private snackService: SnackService,
		private metricsService: MetricsService
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
		});
	}

	ngOnChanges() {
		this.metricsPercent = this.metricsService.calculePercentOfSnacks(this.snacks);
	}

	filterSnacksDate() {
		const snackMap = new Map<string, ISnack[]>(); // Mapa para armazenar lanches por data

		// Iterar sobre cada lanche e agrupá-los por data
		this.snacks.forEach(snack => {
			const snackDate = new Date(snack.date.setHours(0, 0, 0, 0)); // Ignorar a hora e os minutos

			// Verificar se já existe um array de lanches para essa data no mapa
			if (snackMap.has(snackDate.toISOString())) {
				snackMap.get(snackDate.toISOString())?.push(snack); // Adicionar o lanche ao array existente
			} else {
				snackMap.set(snackDate.toISOString(), [snack]); // Criar um novo array para a data
			}
		});

		// Criar um array de objetos contendo a data e os lanches correspondentes
		const result = Array.from(snackMap.entries()).map(([date, snacks]) => ({
			date: new Date(date),
			snacks: snacks,
		}));

		// Ordenar os arrays de snacks em ordem decrescente pelo atributo time
		result.forEach(item => {
			item.snacks.sort((a, b) => b.time.getTime() - a.time.getTime());
		});

		result.sort((a, b) => b.date.getTime() - a.date.getTime());

		return result;
	}

	formatDate(date: Date) {
		return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
			.toString()
			.padStart(2, "0")}.${date.getFullYear()}`;
	}
}

