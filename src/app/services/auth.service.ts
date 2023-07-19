import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ILoginResponse } from "../models/loginResponse.mode";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private http: HttpClient, private router: Router) {}

	url = environment.apiUrl + "/users";

	login(email: string, name: string) {
		return this.http
			.post<ILoginResponse>(this.url, { email, name })
			.subscribe(response => {
				console.log(response);
				if (response.id) {
					localStorage.setItem("user", JSON.stringify(response));
					localStorage.setItem("idSession", response.idSession);
					localStorage.setItem("isAuth", "true");
					this.setCookie("idSession", response.idSession);
					this.router.navigate(["/"]);
				}
			});
	}

	setCookie(name: string, value: string): void {
		const cookie = `${name}=${encodeURIComponent(value)};`;
		document.cookie = cookie;
	}
}

