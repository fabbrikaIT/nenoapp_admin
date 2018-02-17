import { BaseEntity } from '../base/base.model';

export class SchoolManagerEntity extends BaseEntity {
    public schoolId: number;
    public name: string;
    public email: string;
    public cellphone: string;
    public document: number;
    public birthdate: Date;

    public static GetInstance(): SchoolManagerEntity {
        const instance: SchoolManagerEntity = new SchoolManagerEntity();
        instance.schoolId = 0;
        instance.name = "";
        instance.email = "";
        instance.cellphone = "";
        instance.document = 0;

        return instance;
    }

}
