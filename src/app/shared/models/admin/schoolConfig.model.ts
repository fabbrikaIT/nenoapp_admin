import { BaseEntity } from '../base/base.model';

export class SchoolConfigurationEntity extends BaseEntity {
    public schoolId: number;
    public dbName: string;
    public apiPath: string;
    public logo: string;
    public portalUrl: string;

    public static GetInstance(): SchoolConfigurationEntity {
        const instance: SchoolConfigurationEntity = new SchoolConfigurationEntity();
        instance.schoolId = 0;
        instance.dbName = "";
        instance.apiPath = "";
        instance.logo = "";
        instance.portalUrl = "";

        return instance;
    }

}
