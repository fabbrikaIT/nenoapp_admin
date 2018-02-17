import { BaseEntity } from "../base/base.model";

export enum EContractType {
    Monthly = 1,
    Yearly = 2,
    Aquisition = 3
}

export class PlansEntity extends BaseEntity {
    public id: number = 0;
    public name: string = "";
    public description: string = "";
    public contractType: EContractType = EContractType.Monthly;
    public cost: number = 0;

    public static GetInstance(): PlansEntity {
        const instance: PlansEntity = new PlansEntity();

        instance.contractType = EContractType.Monthly;
        instance.id = 0;
        instance.name = "";
        instance.cost = 0;
        instance.description = "";

        return instance;
    }
}
