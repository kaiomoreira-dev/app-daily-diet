import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ISnack } from "src/app/models/snack.model";

@Component({
	selector: "app-snacks-list",
	templateUrl: "./snacks-list.component.html",
	styleUrls: ["./snacks-list.component.scss"],
})
export class SnacksListComponent implements OnInit {
	ngOnInit(): void {}

	constructor(private router: Router) {}

	@Input() snacks: ISnack[] = [];

	edit(id: string | undefined) {
		this.router.navigate([`/snack-details/${id}`]);
	}
}

