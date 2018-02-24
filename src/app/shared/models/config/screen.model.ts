import { BaseEntity } from '../base/base.model';

export class ScreenEntity extends BaseEntity {
    public id: number = 0;
    public parentId: number = undefined;
    public code: string = "";
    public name: string = "";
    public path: string = "";
    public icon: string = "";
    public children: Array<ScreenEntity>;

    public static GetInstance(): ScreenEntity {
        const instance: ScreenEntity = new ScreenEntity();
        instance.children = new Array<ScreenEntity>();

        return instance;
    }

}
