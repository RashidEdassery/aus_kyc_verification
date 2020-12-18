const Ajv = require('ajv');
const ajv = new Ajv.default({ allErrors: true });

export const validate = ajv.compile({
  properties: {
    birthDate: {
      type: 'string',
      pattern: '\\d{4}-\\d{2}-\\d{2}',
    },
    givenName: {
      type: 'string',
      maxLength: 100,
    },
    middleName: {
      type: 'string',
      maxLength: 100,
    },
    familyName: {
      type: 'string',
      maxLength: 100,
    },
    licenceNumber: {
      type: 'string',
    },
    stateOfIssue: {
      type: 'string',
      enum: ['NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA', 'ACT', 'NT'],
    },
    expiryDate: {
      type: 'string',
      pattern: '\\d{4}-\\d{2}-\\d{2}',
    },
  },
  required: ['birthDate', 'givenName', 'familyName', 'licenceNumber', 'stateOfIssue'],
  type: 'object',
});
