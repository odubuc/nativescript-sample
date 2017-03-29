import { Component } from "@angular/core";

@Component({
    selector: "home",
    template: `
        <StackLayout>
            <Label text="Home component" class="title"></Label>
            <Button text="Dropdown" [nsRouterLink]="['/first']" class="link"></Button>
        </StackLayout>
    `
})
export class HomeComponent { }
