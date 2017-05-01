import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component'

import {
    CreateEventComponent,
    CreateSessionComponent,
    EventDetailsComponent,
    EventListResolver,
    EventResolver,
    EventslistComponent,
} from './events/index'

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventslistComponent, resolve: { events: EventListResolver } },
    /**
     * events/1 or /events/foo
     * canActivate is for the routeGuard
     */
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    { path: 'events/session/new', component: CreateSessionComponent},
]
