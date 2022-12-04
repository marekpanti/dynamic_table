import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'fullName'})
export class FullNamePipe implements PipeTransform {
  transform(firstName: string, lastName: string): string {
    console.log('runs x times in pipe')
    return firstName + ' ' + lastName;
  }
}
