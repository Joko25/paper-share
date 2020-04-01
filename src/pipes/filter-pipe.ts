import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { SharedService } from '../providers/shared.service';

@Pipe({
  name: 'filterPipe'
})
export class filterPipe implements PipeTransform {

    constructor(
        public sharedService:SharedService
    ){}
  transform(values: any[], filter: any, keys: any[]): any {
    if (!values || !values.length) return [];
    if (!filter) return values;
    if (!keys.length) return values;
    if (Array.isArray(values)) {
      let isFilter;
      let dateKeys: any[] = [];
      let multipleValueKeys: any[] = [];
      let equalKeys: any[] = [];
      for (let k in filter) {
        console.log('k', k)
        if (filter[k]) {
          isFilter = true;
        }
        if ((k == 'date' || k == 'multiplevalues' || k == 'equals') && Array.isArray(filter[k]) && filter[k].length) {
          isFilter = true;
          if (k == 'date') dateKeys = filter[k].map(v => v.key);
          if (k == 'multiplevalues') multipleValueKeys = filter[k].map(v => v.key);
          if (k == 'equals') equalKeys = filter[k];
        }
      }
      if (isFilter) {
        values = values.filter((v) => {
          let match = false;
          if (v) {
            for (let k in v) {
              if (keys.indexOf(k) >= 0) {
                if (dateKeys.indexOf(k) >= 0) {
                  let dateFilter = filter.date.find((v: any) => {
                    return v.key == k;
                  })
                  let from = moment(dateFilter.from, dateFilter.format);
                  let to = moment(dateFilter.to, dateFilter.format);
                  let value = moment(v[k], dateFilter.formatValue);
                  match = dateFilter.from ? value >= from : match;
                  match = dateFilter.to ? value <= to : match;
                  match = dateFilter.from && dateFilter.to ? value >= from && value <= to : match;
                  match = !dateFilter.from && !dateFilter.to ? true : match;
                } else if (multipleValueKeys.indexOf(k) >= 0) {
                  let multipleFilter = filter.multiplevalues.find((v: any) => {
                    return v.key == k;
                  });
                  multipleFilter.values = multipleFilter.values.map((v) => { return (v + '').toLowerCase(); });
                  match = multipleFilter.values.indexOf((v[k] + '').toLowerCase()) >= 0;
                } else if (equalKeys.indexOf(k) >= 0) {
                  console.log('v[k]', v[k]);
                  console.log('filter[k]', filter[k]);
                  match = (v[k] + '') == (filter[k] + '');
                } else if (Array.isArray(filter[k])) {
                  // console.log('v[k]', v[k]);
                  // console.log('filter[k]', filter[k]);
                  match = filter[k].map((v) => { return (v + '').toLowerCase(); }).indexOf((v[k] + '').toLowerCase()) >= 0;
                } else {
                  match = (v[k] + '').toLowerCase().indexOf((filter[k] + '').toLowerCase()) >= 0;
                }
                if (!match) return
              }
            }
          }
          return match;
        })
        console.log('number of list 1', values)
        this.sharedService.updateNumberOfList(values);
      }
      return values;
    }
  }
}
// use filter params  for date and nested
//  {
//   any protperty not date
//  
//   dateParams:['from,'to'],
//   date:[{
//     key:'date',
//     from:'2018-01-01',
//     to:'2018-02-01',
//     format:'YYYY-MM-DD',
//     formatValue:'YYYY-MM-DD'
//   }],
    // multiple values
    // multiplevalues: [{
    //   key: 'type',
    //   values: ['both', this.filterForm.value.type]
    // }],
    // equals values
    // equals: ['param']
// }