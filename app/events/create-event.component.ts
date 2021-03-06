import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service'
@Component({
    templateUrl: '/app/events/create-event.component.html',
    styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #E3C3C5;}
    .error :: -webkit-inputplaceholder {color: #999; }
    .error :: -moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder {color: #999; }
    `],      
    
})
export class CreateEventComponent {

    isDirty: boolean = true
    constructor(private route: Router, private eventService: EventService) { }
    
    cancel() {
        this.route.navigate(['/events'])
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe((event) => {
        this.isDirty = false
        this.route.navigate(['/events'])
        console.log(formValues)
        })
    }

}
