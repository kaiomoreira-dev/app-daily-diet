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

	getAll(): Observable<any> {
		return this.http.get<any>(this.url, {
			withCredentials: true,
		});
	}

	getById(id: string): Observable<any> {
		return this.http.get<ISnack>(`${this.url}/${id}`, {
			withCredentials: true,
		});
	}

	create(snack: ISnack): Observable<ISnack> {
		return this.http.post<ISnack>(this.url, snack, {
			withCredentials: true,
		});
	}

	update(id: string, snack: ISnack): Observable<ISnack> {
		return this.http.put<ISnack>(`${this.url}/${id}`, snack, {
			withCredentials: true,
		});
	}

	delete(id: string): Observable<ISnack> {
		return this.http.delete<ISnack>(`${this.url}/${id}`, {
			withCredentials: true,
		});
	}
}

