import { BaseEntity } from "../base/base.model";

export enum ELogType {
    Debug = 1,
    Information = 2,
    Warning = 3,
    Error = 4,
    Fatal = 5
}

export class ApplicationLog extends BaseEntity {
    public id: number;
    public date: Date;
    public source: string;
    public message: string;
    public type: ELogType;
    public arguments: string;
}
