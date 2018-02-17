import { SchoolConfigurationEntity } from './schoolConfig.model';
import { PlansEntity } from './plans.model';
import { SchoolManagerEntity } from './schoolManager.model';
import { BaseEntity } from '../base/base.model';

export class SchoolEntity extends BaseEntity{
    public id: number = 0;
    public name: string = "";
    public cnpj: string = "";
    public legalName: string = "";
    public email: string = "";
    public phone: string = "";
    public street: string = "";
    public number: number = 0;
    public complement: string = "";
    public postcode: number = 0;
    public district: string = "";
    public city: string = "";
    public state: string = "";
    public registerDate: Date = new Date();
    public subscriptionPlanId: number = 0;
    public subscriptionPlan: PlansEntity = new PlansEntity();
    public configurations: SchoolConfigurationEntity = new SchoolConfigurationEntity();
    public manager: SchoolManagerEntity = new SchoolManagerEntity();

    public static GetInstance(): SchoolEntity {
        const instance: SchoolEntity = new SchoolEntity();
        instance.id = 0;
        instance.name = "";
        instance.email = "";
        instance.phone = "";
        instance.cnpj = "";
        instance.registerDate = new Date();
        instance.subscriptionPlan = PlansEntity.GetInstance();
        instance.configurations = SchoolConfigurationEntity.GetInstance();
        instance.manager = SchoolManagerEntity.GetInstance();

        return instance;
    }

}
