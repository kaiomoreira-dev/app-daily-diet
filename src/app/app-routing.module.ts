import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { NewSnackComponent } from "./views/new-snack/new-snack.component";
import { SuccessComponent } from "./views/success/success.component";
import { UnsuccessfulComponent } from "./views/unsuccessful/unsuccessful.component";
import { EditSnackComponent } from "./views/edit-snack/edit-snack.component";
import { SnackDetailsComponent } from "./views/snack-details/snack-details.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "login",
		component: LoginComponent,
	},
	{
		path: "new-snack",
		component: NewSnackComponent,
	},
	{
		path: "edit-snack/:id",
		component: EditSnackComponent,
	},
	{
		path: "snack-details/:id",
		component: SnackDetailsComponent,
	},
	{
		path: "congratulations",
		component: SuccessComponent,
	},
	{
		path: "unsuccessful",
		component: UnsuccessfulComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

