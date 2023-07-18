import { Component, OnInit } from "@angular/core";
import { ISnack } from "src/app/models/snack.model";
import { SnackService } from "src/app/services/snack.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	snacks: ISnack[] = [
		{
			id: "123",
			name: "Salada",
			description: "com bacon",
			date: new Date("2023-07-10T10:10:00"),
			time: new Date("2023-07-10T10:10:00"),
			isDiet: true,
		},
		{
			id: "2344",
			name: "X-Tudo",
			description: "com bacon",
			date: new Date("2023-07-10T10:10:00"),
			time: new Date("2023-07-10T11:10:00"),
			isDiet: false,
		},
		{
			id: "eda32423",
			name: "Whey protein com leite",
			description: "super saudavel",
			date: new Date("2023-07-12T12:00:00"),
			time: new Date("2023-07-12T12:00:00"),
			isDiet: true,
		},
	];

	constructor(private snackService: SnackService) {}

	ngOnInit(): void {
		this.snackService.getAll().subscribe(data => {
			console.log(data);
			this.snacks = data;
		});
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

		console.log(result);
		return result;
	}

	formatDate(date: Date) {
		return `${date.getDate().toString().padStart(2, "0")}.${date
			.getMonth()
			.toString()
			.padStart(2, "0")}.${date.getFullYear()}`;
	}
}

