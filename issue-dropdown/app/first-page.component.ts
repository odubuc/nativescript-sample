// app.component.ts
import { Component, OnInit } from "@angular/core";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { ValueList } from './value_list';

@Component({
    selector: "my-app",
    templateUrl:"first-page.component.html",
})
export class FirstPageComponent implements OnInit {
    public selectedIndex = undefined;
    public items: ValueList;
 
    constructor()  {
    }

    ngOnInit() 
    {
        this.items = new ValueList([{ mId: 1, mName:"Florida" }, { mId: 2, mName:"Michigan" }]);
        this.selectedIndex = 1;
    }

    public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    }

    public onopen() {
        console.log("Drop Down opened.");
    }
}

