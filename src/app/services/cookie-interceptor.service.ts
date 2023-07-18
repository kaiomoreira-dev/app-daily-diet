import { Injectable } from "@angular/core";
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CookieInterceptorService implements HttpInterceptor {
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		let idSession = localStorage.getItem("idSession");
		console.log(idSession);
		const modifiedRequest = request.clone({
			withCredentials: true, // Permite o envio dos cookies na requisição
			headers: request.headers.set("Cookie", `idSession=${idSession}`), // Define a informação a ser adicionada aos cookies
		});
		console.log("aa");
		return next.handle(modifiedRequest);
	}
}

