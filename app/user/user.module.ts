import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms' //ReactiveFormsModule is needed for Model based Forms
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component'
import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes), //differnce between main and child modules
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
    ],
    providers: [
        {
            provide: 'canDeactivateProfile',
            useValue: checkDirtyUserState,
        },

    ],
})
export class UserModule { }

function checkDirtyUserState(component: ProfileComponent) {
    
    if (component.isDirty)
        return window.confirm('Are you sure to cancel?')

    return true

}
