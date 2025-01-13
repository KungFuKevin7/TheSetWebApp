
export class Users {

  userId? : number;
  username? : string;
  password? : string;

  constructor(username?: string, password?: string)
  {
    this.userId = 0;
    this.username  = username;
    this.password = password;
  }

  getUsername() : string | undefined {
    return this.username;
  }

  getPassword() : string | undefined{
    return this.password;
  }

  setUsername(username : string) : void{
    this.username = username;
  }

  setPassword(password : string) : void{
    this.password = password;
  }

}
