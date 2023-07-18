import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ISnack } from "../models/snack.model";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class SnackService {
	constructor(private http: HttpClient) {}

	url = environment.apiUrl + "/snacks";

	getAll(): Observable<ISnack[]> {
		return this.http.get<ISnack[]>(this.url, {
			withCredentials: true,
		});
	}
}

