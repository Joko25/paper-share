import { Injectable } from '@angular/core';
import * as _moment from 'moment';

/*
  Service for handling object transformation. Main use for now to transform to 
  select box object from API Stream
*/
@Injectable()
export class DateConverterService {
  
    constructor() {
    }
    
    public convertDateToSQLDate(date_object){
        console.log('Date Object:', date_object);
        
        let converted_date = _moment(date_object).format('YYYY-MM-DD');
        console.log('converted_date', converted_date);
        return converted_date;
    }
	
}
