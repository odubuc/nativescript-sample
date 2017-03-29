
import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { registerElement } from "nativescript-angular/element-registry";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

import { FirstPageComponent } from './first-page.component';
import { HomeComponent } from './home.component';

registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);

/* Main Module */
@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
    ],
    entryComponents: [ FirstPageComponent, HomeComponent ],
    declarations: [
        AppComponent,
        
        FirstPageComponent, 
        HomeComponent
    ],
    providers: [

    ],
    exports: []
})

export class MainModule {}