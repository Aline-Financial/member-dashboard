import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserProfileUpdate } from '@app/core/models/user-profile-update.model';
import { ProfileService } from '@app/core/services/profile.service';
@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.sass']
})
export class ProfileUpdateComponent implements OnInit {
  userUpdate!: UserProfileUpdate;
  updateForm!: FormGroup;
  registrationLoading = false;
  state:any;
  constructor(private http: HttpClient, private service: ProfileService,public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.state=window.history.state.edit;
    console.log(this.state)
    this.updateForm = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null),
    lastName: new FormControl(null),
    phone: new FormControl(null),
    driversLicense: new FormControl(null),
    income: new FormControl(null),
    address: new FormControl(null),
    city: new FormControl(null),
    state: new FormControl(null),
    zipcode: new FormControl(null),
    mailingAddress: new FormControl(null),
    mailingCity: new FormControl(null),
    mailingState: new FormControl(null),
    mailingZipcode: new FormControl(null)})
  }

  updateProfile(): void {
    this.userUpdate=this.updateForm.value;
    this.service.putProfileUpdate(this.userUpdate).subscribe((temp: UserProfileUpdate) => this.userUpdate=temp);
  }

}
