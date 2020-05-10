export interface IProvinciaModel {
  id: string;
  name: string;
  department_id: string;
}

export class ProvinciaModel {
  id: string;
  name: string;
  departmentId: string;

  constructor(base = {} as IProvinciaModel) {
    this.id = base.id;
    this.name = base.name;
    this.departmentId = base.department_id;
  }

}
