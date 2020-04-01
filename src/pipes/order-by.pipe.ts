import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipe implements PipeTransform {
  transform(value: any, ...args) {
    if (value && args[0]) {
      let type = args[1] ? 'desc' : 'asc';
      let key = args[0];

      let ordered = value.sort((a: any, b: any) => {
        if (parseInt(a[key]) == a[key] && parseInt(b[key]) == b[key]) {
          let aData = parseInt(a[key]);
          let bData = parseInt(b[key]);
          if (aData > bData && type === 'asc') {
            return 1;
          } else if (aData > bData && type === 'desc') {
            return -1;
          } else if (aData < bData && type === 'asc') {
            return -1;
          } else if (aData < bData && type === 'desc') {
            return 1;
          } else {
            return 0;
          }
        }
        if (typeof a[key] == 'string') {
          if (a[key].toLowerCase() > b[key].toLowerCase() && type === 'asc') {
            return 1;
          } else if (a[key].toLowerCase() > b[key].toLowerCase() && type === 'desc') {
            return -1;
          } else if (a[key].toLowerCase() < b[key].toLowerCase() && type === 'asc') {
            return -1;
          } else if (a[key].toLowerCase() < b[key].toLowerCase() && type === 'desc') {
            return 1;
          } else {
            return 0;
          }
        }

        if (a[key] > b[key] && type === 'asc') {
          return 1;
        } else if (a[key] > b[key] && type === 'desc') {
          return -1;
        } else if (a[key] < b[key] && type === 'asc') {
          return -1;
        } else if (a[key] < b[key] && type === 'desc') {
          return 1;
        } else {
          return 0;
        }
      });
      return ordered;
    }
    return value;
  }
}