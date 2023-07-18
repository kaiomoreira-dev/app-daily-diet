import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	constructor(private authService: AuthService) {}

	email: string = "";
	name: string = "";

	submit() {
		console.log(this.name, this.email);
		this.authService.login(this.email, this.name);
	}
}

