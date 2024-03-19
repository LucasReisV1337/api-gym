import { randomUUID as uuid } from "crypto";
export default class User {
  private _id: string;
  private _nickname: string;
  private _email: string;
  private _password: string;

  constructor(nickname: string, email: string, password: string, id?: string) {
    this._id = id || uuid();
    this._nickname = nickname;
    this._email = email;
    this._password = password;
  }

  get id(): string {
    return this._id;
  }

  get nickname(): string {
    return this._nickname;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  login(email: string, password: string): void {
    if (this._email === email && this._password === password) {
      console.log("Usuário logado");
    } else {
      throw new Error("Email ou senha incorretos");
    }
  }

  createAccount(
    nickname: string,
    email: string,

    password: string
  ): void {
    if (this._email === email) {
      console.log("Usuário já cadastrado");
    }
    this._nickname = nickname;
    this._email = email;

    this._password = password;
  }

  deleteAccount(email: string, password: string): void {
    if (this._email === email && this._password === password) {
    } else {
      console.log("Email ou senha inválidos");
    }
  }

  updateAccount(
    nickname: string,
    email: string,

    password: string
  ): void {
    if (this._email === email) {
      console.log("Usuário já cadastrado");
    }
    this._nickname = nickname;
    this._email = email;

    this._password = password;
  }

  readAccount(id: string): string | undefined | void{
    if (this._id === id) {
      return this._nickname, this._email, this._password;
    }
    else {
      console.log("Usuário não encontrado");
    }
    
  }

  changePassword(email: string, password: string, newPassword: string): void {
    if (this._email === email && this._password === password) {
      this._password = newPassword;
    }
  }
}
