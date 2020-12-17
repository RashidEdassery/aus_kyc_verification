import { KYCModule } from '../src/index';
import { ResponseType } from '../src/_models';
import { expect, assert } from './test_spec';

it('Should throw an error when initializing the class with wrong params', () => {
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

it('Should return an object<ResponseType>, with success value as True', (done) => {
  const kycModule = new KYCModule({
    birthDate: '1985-02-08',
    givenName: 'James',
    middleName: 'Robert',
    familyName: 'Smith',
    licenceNumber: '94977000',
    stateOfIssue: 'NSW',
    expiryDate: '2020-01-01',
  });
  kycModule
    .verifyUser()
    .then((res: ResponseType) => {
      console.log(res);
      expect(res.success).to.be.a('boolean').to.equal(true);
      done();
    })
    .catch(done);
}).timeout(30000);
