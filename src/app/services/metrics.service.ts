import { Injectable } from "@angular/core";
import { ISnack } from "../models/snack.model";
import { TemplateBindingParseResult } from "@angular/compiler";

@Injectable({
	providedIn: "root",
})
export class MetricsService {
	constructor() {}

	calculePercentOfSnacks(snacks: ISnack[]): number {
		const total: number = snacks.length;
		let isDietQtd: number = 0;

		snacks.map(snack => {
			if (snack.isDiet) {
				isDietQtd++;
			}
		});

		const result = Number(((isDietQtd / total) * 100).toFixed(2));

		if (result) return result;
		else return 0;
	}

	getQtdIsDiet(snacks: ISnack[]) {
		let isDietQtd: number = 0;
		snacks.map(snack => {
			if (snack.isDiet) {
				isDietQtd++;
			}
		});
		return isDietQtd;
	}

	getQtdNotIsDiet(snacks: ISnack[]) {
		let isntDietQtd: number = 0;
		snacks.map(snack => {
			if (!snack.isDiet) {
				isntDietQtd++;
			}
		});
		return isntDietQtd;
	}
}

