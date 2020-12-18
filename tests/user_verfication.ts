import { KYCModule } from '../src/index';
import { ResponseType } from '../src/_models';
import { expect, assert } from './test_spec';
const faker = require('faker');
faker.locale = "en_AU";

it('Should throw an error when initializing the class with invalid name of state', () => {
  assert.throws(
    () =>
      new KYCModule({
        birthDate: '1985-02-08',
        givenName: 'James',
        middleName: 'Robert',
        familyName: 'Smith',
        licenceNumber: '94977000',
        stateOfIssue: 'WRONG_PARAM',
        expiryDate: '2020-01-01',
      }),
    Error,
    'Invalid Parameters.',
  );
}).timeout(30000);

it('Should throw an error when initializing the class with invalid character length', () => {
  assert.throws(
    () =>
      new KYCModule({
        birthDate: '1985-02-08',
        givenName: 'consectetur adipiscing elit. Praesent pharetra fringilla nisl eget consectetur. Duis hendrerit a lib morethan 100',
        middleName: 'Robert',
        familyName: 'Smith',
        licenceNumber: '94977000',
        stateOfIssue: 'NSW',
        expiryDate: '2020-01-01',
      }),
    Error,
    'Invalid Parameters.',
  );
}).timeout(30000);

it('Should throw an error when initializing the class with invalid date format', () => {
  assert.throws(
    () =>
      new KYCModule({
        birthDate: '1985/02/08',
        givenName: 'James',
        middleName: 'Robert',
        familyName: 'Smith',
        licenceNumber: '94977000',
        stateOfIssue: 'NSW',
        expiryDate: '2020-01-01',
      }),
    Error,
    'Invalid Parameters.',
  );
}).timeout(30000);

it('Should return an object<ResponseType>, with success value as True or False depend on the random values', (done) => {
  const kycModule = new KYCModule({
    birthDate: faker.date.past().toISOString().split('T')[0],
    givenName: faker.name.firstName(),
    familyName: faker.name.firstName(),
    licenceNumber: faker.random.number().toString(),
    stateOfIssue: faker.address.stateAbbr(),
    expiryDate: faker.date.future().toISOString().split('T')[0],
  });
  kycModule
    .verifyUser()
    .then((res: ResponseType) => {
      console.log(res);
      expect(res.success).to.be.a('boolean').to.be.oneOf([true, false]);
      done();
    })
    .catch(done);
}).timeout(30000);

it('Should return an object<ResponseType>, with success value as false', (done) => {
  const kycModule = new KYCModule({
    birthDate: '1985-02-08',
    givenName: 'James',
    middleName: 'Robert',
    familyName: 'Smith',
    licenceNumber: '94977000',
    stateOfIssue: 'NSW',
    expiryDate: '2019-01-01',
  });
  kycModule
    .verifyUser()
    .then((res: ResponseType) => {
      console.log(res);
      expect(res.success).to.be.a('boolean').to.equal(false);
      done();
    })
    .catch(done);
}).timeout(30000);
