import { Component } from "@angular/core";

@Component({
    templateUrl: './counter-page.component.html',
    styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
    counterDefault = 7
    counter = this.counterDefault;

    increasedBy(value: number){
        this.counter += value;
    }

    resetCounter(){
        this.counter = this.counterDefault
    }
}