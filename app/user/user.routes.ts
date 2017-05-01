import { LoginComponent } from './login.component'
import { ProfileComponent } from './profile.component'

//for lazy loading
export const userRoutes = [
    { path: 'profile', component: ProfileComponent , canDeactivate: ['canDeactivateProfile']}, // /user/profile
    { path: 'login', component: LoginComponent },
]
