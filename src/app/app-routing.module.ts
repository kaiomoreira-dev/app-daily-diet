import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { NewSnackComponent } from "./views/new-snack/new-snack.component";
import { SuccessComponent } from "./views/success/success.component";
import { UnsuccessfulComponent } from "./views/unsuccessful/unsuccessful.component";
import { EditSnackComponent } from "./views/edit-snack/edit-snack.component";
import { SnackDetailsComponent } from "./views/snack-details/snack-details.component";
import { AuthGuard } from "./guards/auth-guard.guard";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "login",
		component: LoginComponent,
	},
	{
		path: "new-snack",
		component: NewSnackComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "edit-snack/:id",
		component: EditSnackComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "snack-details/:id",
		component: SnackDetailsComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "congratulations",
		component: SuccessComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "unsuccessful",
		component: UnsuccessfulComponent,
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

