interface User {
  id: number;
  firstName: string;
  lastName: string;
  // How do we ensure that role is only one of: 'admin' or 'user' or 'super-admin'
  role: string;
}

const defaultUser: User = {
  id: 1,
  firstName: "Asaad",
  lastName: "Saad",
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
