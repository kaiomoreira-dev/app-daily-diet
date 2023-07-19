import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { MetricsService } from "src/app/services/metrics.service";

@Component({
	selector: "app-metrics",
	templateUrl: "./metrics.component.html",
	styleUrls: ["./metrics.component.scss"],
})
export class MetricsComponent implements OnChanges {
	iconColor = "#000";
	metricsColor = "#DDDEDF";
	@Input() metricsPercent: number = 0;

	ngOnChanges(changes: SimpleChanges) {
		if (changes["metricsPercent"] && !changes["metricsPercent"].firstChange) {
			this.updateColors();
		}
	}

	private updateColors() {
		console.log(this.metricsPercent);
		if (this.metricsPercent >= 60) {
			this.metricsColor = "#E5F0DB";
			this.iconColor = "#639339";
		} else {
			this.metricsColor = "#F4E6E7";
			this.iconColor = "#BF3B44";
		}
	}
}

