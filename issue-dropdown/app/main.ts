//Without router
/*
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { FirstPageComponent } from "./first-page.component";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);

@NgModule({
    declarations: [FirstPageComponent],
    bootstrap: [FirstPageComponent],
    imports: [NativeScriptModule],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
*/



//With Router

import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { MainModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(MainModule);
