import Trainning from "@src/@core/trainning/entity/trainning";
import { randomUUID as uuid } from "crypto";
export default class User {
  private _id: string;
  private _nickname: string;
  private _email: string;
  private _cpf: number;
  private _password: string;
  private _emailVerified: boolean;
  private _trainings: Trainning[];

  constructor(
    nickname: string,
    email: string,
    cpf: number,
    password: string,
    trainings: Trainning[] = []
  ) {
    this._id = uuid();
    this._nickname = nickname;
    this._email = email;
    this._cpf = cpf;
    this._password = password;
    this._emailVerified = false;
    this._trainings = trainings;
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

  get cpf(): number {
    return this._cpf;
  }

  get password(): string {
    return this._password;
  }

  get emailVerified(): boolean {
    return this._emailVerified;
  }

  login(email: string, password: string): void {
    if (this._email === email && this._password === password) {
      this._emailVerified = true;
      console.log("Login efetuado com sucesso");
    } else {
      throw new Error("Email ou senha incorretos");
    }
  }

  verifyEmail(email: string): void {
    if (this._email === email) {
      this._emailVerified = true;
      console.log("Email verificado com sucesso");
    } else {
      console.log("Email inválido");
    }
  }

  createAccount(
    nickname: string,
    email: string,
    cpf: number,
    password: string
  ): void {
    if (this._email === email || this._cpf === cpf) {
      console.log("Usuário já cadastrado");
    }
    this._nickname = nickname;
    this._email = email;
    this._cpf = cpf;
    this._password = password;
    console.log("Usuário cadastrado com sucesso");
  }

  deleteAccount(email: string, password: string): void {
    if (this._email === email && this._password === password) {
      console.log("Conta deletada com sucesso");
    } else {
      console.log("Email ou senha inválidos");
    }
  }

  updateAccount(
    nickname: string,
    email: string,
    cpf: number,
    password: string
  ): void {
    if (this._email === email || this._cpf === cpf) {
      console.log("Usuário já cadastrado");
    }
    this._nickname = nickname;
    this._email = email;
    this._cpf = cpf;
    this._password = password;
    console.log("Usuário atualizado com sucesso");
  }

  changePassword(email: string, password: string, newPassword: string): void {
    if (this._email === email && this._password === password) {
      this._password = newPassword;
      console.log("Senha alterada com sucesso");
    }
  }

  addTraining(training: Trainning): void {
    this._trainings.push(training);
    console.log(
      `Treino ${training.name} adicionado com sucesso para o usuário ${this.nickname}`
    );
  }

  getTrainings(): Trainning[] {
    console.log(this._trainings);
    return this._trainings;
  }
}
