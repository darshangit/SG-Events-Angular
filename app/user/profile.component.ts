import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service'
import { AuthService } from './auth.service'

@Component({
    templateUrl: 'app/user/profile.component.html',
    styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #E3C3C5;}
    .error :: -webkit-inputplaceholder {color: #999; }
    .error :: -moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder {color: #999; }
    `],
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup
    isDirty: boolean = true
    firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]) // this is for prepopulation in the form.
    //In this case the first and last name will be displayed by default
    lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required])

    constructor(private route: Router,
                private auth: AuthService,
                @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

    ngOnInit() {
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
        })
    }

    cancel() {
        this.route.navigate(['events'])
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.auth.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
            this.toastr.success('Profile Saved');
            // this.route.navigate(['events'])
            } )

        }
    }

    validateLastName() {
        return this.lastName.valid || this.lastName.untouched //already boolean values , no need to cast
    }

    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched
    }

    logout() {
        this.auth.logout().subscribe(() => {
            this.route.navigate([`/user/login`]);
        })
    }
}
