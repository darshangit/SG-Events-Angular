import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/event.model'
import { EventService } from './shared/event.service'

@Component({
    template: `
    <div>
    <h1>Societe Generale : Technical Events - 2017</h1>
        <hr/>

        <div class="row">
        <div  *ngFor="let eventIter of eventsArray" class="col-md-5">
         <event-thumbnail [event]="eventIter"></event-thumbnail>
         </div>
         </div>
    </div>`,

})
export class EventslistComponent implements OnInit {
  eventsArray: IEvent[]

    constructor(private eventService: EventService, 
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
     this.eventsArray = this.activatedRoute.snapshot.data['events']
    }
}
