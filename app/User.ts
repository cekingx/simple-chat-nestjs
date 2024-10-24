import Message from "./Message";

class User {
  username: string;

  constructor(param: Partial<User>) {
    this.username = param.username;
  }
}

export default User;