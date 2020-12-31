const ContactReducer = (state, action) => {
  switch(action.type) {
    case 'GET_CURRENT_CONTACT':
      return {
        ...state,
        currentContact: state.contacts.find(contact => contact.id === parseInt(action.payload)),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };
    default:
      return state;
  }
}

export default ContactReducer;