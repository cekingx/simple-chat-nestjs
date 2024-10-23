import Message from "./Message";

class User {
  username: string;
  connection?: any;

  constructor(param: Partial<User>) {
    this.username = param.username;
  }

  setConnection(connection: any) {
    this.connection = connection;
  }

  notify(message: Message): boolean | Error {
    if(!this.connection) {
      return new Error('User does not have connection');
    }

    this.connection.send(message);
    return true;
  }
}

export default User;