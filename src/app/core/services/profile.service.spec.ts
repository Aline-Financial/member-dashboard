import {TestBed} from '@angular/core/testing';

import {ProfileService} from './profile.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '@environments/environment';
import { AddressResponse, ContactInfo, UserProfile } from '../models/user-profile.model';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpMock: HttpTestingController;
  let api = environment.application.api;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService]
    });
    service = TestBed.inject(ProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the login endpoint', () =>  {
    const cont: ContactInfo={
      phone:'555-555-5555',
      email:'testboy@gmail.com'
    }
    const add: AddressResponse ={
      address:'93 Some Lane',
      city: 'Buchanan',
      state: 'Virginia',
      zipcode: '24066'
    }
    const user: UserProfile = {
      username: 'testboy',
      firstName: 'test',
      middleName:'this',
      lastName:'boy',
      membershipId:'MI123456',
      income: 120000,
      contactInfo: cont,
      billingAddress: add,
      mailingAddress: add
    };

    service.getUserProfile();

    let req = httpMock.expectOne(`${api}/users/current/profile`);

    expect(req.request.url).toBe(`${api}/users/current/profile`);
    expect(req.request.method).toBe('GET');
    expect(req.request.body).toBe(user);

  });
});
