import { BaseEntity } from '../base/base.model';

export class MenuEntity extends BaseEntity {
  public Id: number = 0;
  public Code: string = "";
  public DisplayName: string = "";
  public RoutePath: string = "";
  public Icon: string = "";
  public SubMenu: Array<MenuEntity> = new Array<MenuEntity>();
}
