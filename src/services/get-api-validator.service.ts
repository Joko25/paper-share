import { Injectable } from '@angular/core';

@Injectable()
export class GetApiValidatorService {
  
    constructor() {
    }
    
    public checkDataValid(data_object) {
        if(data_object === null || data_object === undefined) return false;
        
        if(data_object.length === 0) return false;

        return true;
    }
	
}