import { Injectable } from "@angular/core";
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		// Verifique aqui a condição de autenticação
		const isAuthenticated = localStorage.getItem("isAuth") === "true";

		if (isAuthenticated) {
			return true; // Permite a navegação para a rota
		} else {
			// Redireciona para a página de login ou outra rota desejada
			this.router.navigate(["/login"]);
			return false; // Impede a navegação para a rota
		}
	}
}

