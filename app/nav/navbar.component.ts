import { Component } from '@angular/core';
import { EventService, ISession } from '../events/shared/index'
import { AuthService } from '../user/auth.service'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px;}
    .hover {background-color: #487769; cursor: pointer; }
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm { display:none}}
    li > a.active { color: #F97924; }
    `],
})
export class NavBarComponent {
    searchTerm: string= ''
    foundSessions: ISession[]

    constructor(private auth: AuthService,
                private eventService: EventService) {
            
    }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe
        ((sessions) => {
                this.foundSessions = sessions;
                console.log(this.foundSessions)
            },
        )
    }

}
