interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

const defaultUser = {};

const getUserId = (user: User) => {
  return user.id;
};

getUserId(defaultUser);

