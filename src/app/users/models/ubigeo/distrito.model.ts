export interface IDistritoModel {
  id: string;
  name: string;
  province_id: string;
  department_id: string;
}

export class DistritoModel {
  id: string;
  name: string;
  provinceId: string;
  departmentId: string;

  constructor(base = {} as IDistritoModel) {
    this.id = base.id;
    this.name = base.name;
    this.provinceId = base.province_id;
    this.departmentId = base.department_id;
  }

}
