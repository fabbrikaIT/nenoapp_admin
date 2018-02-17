import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'planTypeName'})
export class PlanTypePipe implements PipeTransform {
  transform(value: any, args: any[]) {
      switch (value) {
        case 1:
          return "Mensal";
        case 2:
          return "Anual";
        case 3:
          return "Aquisição";
        default:
          return "";
      }
  }
}
