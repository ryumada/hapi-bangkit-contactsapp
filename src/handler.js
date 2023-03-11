// initialize the required packages
const contacts = require('./contacts');
let newContactId = 1;

/**
 * A handler to add contact
 * 
 * @param {Hapi} request request parameter from Hapi 
 * @param {*} h request header from Hapi
 * @returns hapi response
 */
const addContactHandler = (request, h) => {
  // TODO: Take the name, email, and phone from request.payload
  

  // TODO: Generate a new createdAt date taken from new Date().toISOString();


  // TODO: Create an updateAt date taken from createdAt


  // TODO: declare id from newContactId


  // TODO: declare newContact constant with these attributes:
  // {name, email, phone, id, createdAt, updatedAt}
  

  // TODO: push the newContact constant to contacts array

  
  // check if contact is successfuly inserted to the contacts array
  const isSuccess = contacts.filter((contact) => contact.id === id.length > 0);

  if (isSuccess) {
    // TODO: create a basic Hapi Success response

    // TODO: increment newContactId

    // TODO: assign response code created

    return response;
  }

  // TODO: create a basic server error response
  return response;
};

/**
 * a handler to retrieve all contacts
 * 
 * @returns Hapi response with 200 code
 */
const getAllContactsHandler = () => ({
  status: 'success',
  data: {
    // TODO: take contacts array to this attribute
  },
});

// untuk menghapus contact by id
const deleteContactByIdHandler = (request, h) => {
  // TODO: take id from Hapi request parameter

  // find array index from id
  const index = contacts.findIndex((contact) => contact.id == id);

  if (index !== -1) {
    contacts.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus. Id tidak ditemukan?!',
  });
  response.code(404);
  return response;
};

// TODO: export module, so this can be used in another js file

