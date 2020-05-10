export interface IDepartamentoModel {
  id: string;
  name: string;
}

export class DepartamentoModel {
  id: string;
  name: string;

  constructor(base = {} as IDepartamentoModel) {
    this.id = base.id;
    this.name = base.name;
  }
}
