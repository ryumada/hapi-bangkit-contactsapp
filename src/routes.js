const {
  addContactHandler,
  getAllContactsHandler,
  deleteContactByIdHandler,
} = require('./handler');

const routes = [
  // untuk menambahkan contacts baru
  {
    method: 'POST',
    path: '/contacts',
    handler: addContactHandler,
  },
  // TODO: create a GET method with path /contacts to call getAllContactsHandler

  // TODO: create a DELETE method with path /contacts/{id} to call deleteContactByIdHandler

];

// TODO: export routes module
