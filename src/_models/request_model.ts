export interface UserDetailsType {
  birthDate: string;
  givenName: string;
  middleName?: string;
  familyName: string;
  licenceNumber: string;
  stateOfIssue: string;
  expiryDate?: string;
}

export enum State_Values {
  NSW = 'NSW',
  QLD = 'QLD',
  SA = 'SA',
  TAS = 'TAS',
  VIC = 'VIC',
  WA = 'WA',
  ACT = 'ACT',
  NT = 'NT',
}
