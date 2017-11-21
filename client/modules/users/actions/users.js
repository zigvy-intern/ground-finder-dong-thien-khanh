export default{

  create({Meteor, LocalState}, email, password, name, phoneNumber) {
    if (!email) {
      return LocalState.set('CREATE_USER_ERROR', 'Email, Name, Phone Number is required.');
    }
    if (!password) {
      return LocalState.set('CREATE_USER_ERROR', 'Password, Name, Phone Number is required.');
    }
    if (!name) {
      return LocalState.set('CREATE_USER_ERROR', 'Email, Password, Phone Number is required.');
    }
    if (!phoneNumber) {
      return LocalState.set('CREATE_USER_ERROR', 'Email, Password, Name is required.');
    }
  LocalState.set('CREATE_USER_ERROR', null);
  Accounts.createUser({email, password, name, phoneNumber});
  FlowRouter.go('/');
  },
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  },

  login({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email) {
      return LocalState.set('LOGIN_ERROR', 'Email is required.');
    }
    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'Password is required.');
    }
  LocalState.set('LOGIN_ERROR', null);
  Meteor.loginWithPassword(email, password);
  FlowRouter.go('/');
  },
};
