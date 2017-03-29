import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit { 

    constructor() 
    {
        console.log('AppComponent - constructor()');
    }

    ngOnInit() 
    {
        console.log("AppComponent - ngOnInit()");
    }

}
