import { SnacksListComponent } from "./components/snacks-list/snacks-list.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./views/home/home.component";
import { MetricsComponent } from "./components/metrics/metrics.component";
import { ArrowRightComponent } from "./components/icons/arrow-right/arrow-right.component";
import { LogoComponent } from "./components/icons/logo/logo.component";
import { AddComponent } from "./components/icons/add/add.component";
import { SnackItemComponent } from "./components/snacks-list/snack-item/snack-item.component";
import { LoginComponent } from "./views/login/login.component";
import { ButtonFilledComponent } from "./components/button-filled/button-filled.component";
import { ButtonOutlineComponent } from "./components/button-outline/button-outline.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ArrowBackComponent } from "./components/icons/arrow-back/arrow-back.component";
import { NewSnackComponent } from "./views/new-snack/new-snack.component";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { SuccessComponent } from './views/success/success.component';
import { UnsuccessfulComponent } from './views/unsuccessful/unsuccessful.component';
import { SnackFormComponent } from './components/snack-form/snack-form.component';
import { EditSnackComponent } from './views/edit-snack/edit-snack.component';
import { SnackDetailsComponent } from './views/snack-details/snack-details.component';
import { EditComponent } from './components/icons/edit/edit.component';
import { DeleteComponent } from './components/icons/delete/delete.component';
import { StatisticsComponent } from './views/statistics/statistics.component';

const maskConfig: Partial<IConfig> = {
	validation: false,
};
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		MetricsComponent,
		ArrowRightComponent,
		AddComponent,
		SnackItemComponent,
		SnacksListComponent,
		LogoComponent,
		LoginComponent,
		ButtonFilledComponent,
		ButtonOutlineComponent,
		ArrowBackComponent,
		NewSnackComponent,
  SuccessComponent,
  UnsuccessfulComponent,
  SnackFormComponent,
  EditSnackComponent,
  SnackDetailsComponent,
  EditComponent,
  DeleteComponent,
  StatisticsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		NgxMaskModule.forRoot(maskConfig),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

