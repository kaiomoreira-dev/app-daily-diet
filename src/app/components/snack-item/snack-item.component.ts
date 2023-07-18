import { Component, Input } from "@angular/core";
import { ISnack } from "src/app/models/snack.model";

@Component({
	selector: "app-snack-item",
	templateUrl: "./snack-item.component.html",
	styleUrls: ["./snack-item.component.scss"],
})
export class SnackItemComponent {
	@Input() snack!: ISnack;

	formatTime(time: Date) {
		let hour = time.getHours().toString();
		let minute = time.getMinutes().toString();

		if (minute === "0") {
			minute = "00";
		}
		return hour + ":" + minute;
	}
}

