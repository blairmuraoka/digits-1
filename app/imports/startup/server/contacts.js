import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Blair',
    last: 'Muraoka',
    address: '2410 Campus Rd., Honolulu, HI',
    telephone: '808-823-2391',
    email: 'bmura@hawaii.edu',
  },
  {
    first: 'David',
    last: 'Rock',
    address: '1220 Kapiolani Blvd., Honolulu, HI',
    telephone: '808-231-9910',
    email: 'darock@gmail.com',
  },
  {
    first: 'John',
    last: 'Powers',
    address: '905 York St., Brooklyn, New York',
    telephone: '718-488-0591',
    email: 'jpow@gmail.com',
  },
  {
    first: 'Joshua',
    last: 'Black',
    address: '1200 Elm St., San Francisco, California',
    telephone: '312-821-4693',
    email: 'joshblack@gmail.com',
  },
  {
    first: 'Jennifer',
    last: 'Ngo',
    address: '800 Cali Rd., San Francisco, California',
    telephone: '312-821-4782',
    email: 'jenngo@gmail.com',
  },
  {
    first: 'David',
    last: 'Ngo',
    address: '800 Cali Rd., San Francisco, California',
    telephone: '312-821-2391',
    email: 'davidngo@gmail.com',
  },
];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(contacts) {
    Contacts.insert(contacts);
  });
}
