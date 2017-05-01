import './rxjs-extension'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
// tslint:disable-next-line:max-line-length
import { CollapsibleWellComponent , JQ_TOKEN, ModaltriggerDirective, SimpleModalComponent, Toastr, TOASTR_TOKEN} from './common/index'
import { Error404Component } from './errors/404.component'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { appRoutes } from './routes'
import { AuthService } from './user/auth.service'

import { // this style of importing is called barrel
    CreateEventComponent,
    CreateSessionComponent,
    DurationPipe,
    EventDetailsComponent,
    EventListResolver,
    EventResolver,
    EventService,
    EventslistComponent,
    EventthumbnailComponent,
    LocationValidator,
    SessionListComponent,
    UpvoteComponent,
    VoterService,
} from './events/index'

declare const toastr: Toastr;
declare const jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        EventsAppComponent,
        EventslistComponent,
        EventthumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        NavBarComponent,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModaltriggerDirective,
        UpvoteComponent,
        LocationValidator,
        DurationPipe,
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,  // do this(opaque Token) only for services
            useValue: toastr,
        },
        {
            provide: JQ_TOKEN,  // do this(opaque Token) only for services
            useValue: jQuery,
        },
        EventResolver, 
        EventListResolver,
        AuthService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState,
        },
        VoterService,
    ],
    bootstrap: [EventsAppComponent],
})

export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {

    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}

