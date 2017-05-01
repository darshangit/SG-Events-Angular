import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IEvent } from './shared/event.model'

@Component({
    selector: 'event-thumbnail',
    template: `
      <div [routerLink] = "['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name | uppercase}}</h2>
            <div>Date: {{event?.date| date:'shortDate'}}</div>
            
            <!-- Method 1 of putting the Style Element -->
            <!--<div  [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time"> -->
            
            <div  [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: {{event?.price | currency:'INR':true}}</div>
            <div [hidden]="!event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}},{{event?.location?.country}}</span>
           </div>
           <div *ngIf="event?.onlineUrl">
            <span>Online URL: {{event?.onlineUrl}}</span>
           </div>
        </div>
`,
    styles: [`
.pad-left { margin-left: 2px; }
.thumbnail { min-height: 250px; }
/*.bold { font-weight: bold; }
.green {color: #003300 !important; } not required as using ngStyle.(Use if using ngClass) */
`],
})
export class EventthumbnailComponent {
    @Input() event: IEvent
    someProperty: any = 'Some value'

    logFoo() {
        console.log('foo');
    }

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        //Method 1:
        // return {green: isEarlyStart, bold: isEarlyStart}
        //Method 2:
        // if(isEarlyStart){
        //     return 'green , bold'
        // }
        // Method 3:
        if (isEarlyStart) {
            return ['green', 'bold']
        }

    }
    getStartTimeStyle(): any {
        const isEarlyStart = this.event && this.event.time === '8:00 am'

        if (isEarlyStart) {
            return {
                'color': '#003300',
                'font-weight': 'bold',
            }
        }
    }
}
