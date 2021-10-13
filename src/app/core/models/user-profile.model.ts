export type ContactInfo = {
  phone: string;
  email: string;
}

export type AddressResponse = {
  address: string;
  city: string;
  state: string;
  zipcode: string;
}

export type UserProfile = {
  username: string;
  firstName: string;
  middleName: string;
  lastName: string;
  membershipId: string;
  income: number;
  contactInfo: ContactInfo;
  billingAddress: AddressResponse;
  mailingAddress: AddressResponse;
};