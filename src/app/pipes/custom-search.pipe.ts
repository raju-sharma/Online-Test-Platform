import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSearch'
})
export class CustomSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filterItems =  value.filter(el=>{
      if(el.title.toLowerCase().search(args.toLowerCase()) >-1)
      {
        return true;
      }
      else{
  return false;
      }
    })
      return filterItems;
  }

}
