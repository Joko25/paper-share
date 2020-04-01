import { Pipe, PipeTransform } from "@angular/core";

const PADDING = "000000";

@Pipe({ name: "currencyPipe" })
export class CurrencyPipe implements PipeTransform {

  private DECIMAL_SEPARATOR: string;
  private THOUSANDS_SEPARATOR: string;

  constructor() {
    // TODO comes from configuration settings
    this.DECIMAL_SEPARATOR = ".";
    this.THOUSANDS_SEPARATOR = ",";
  }

  transform(value: number | string, fractionSize: number = 2): string {
      console.log('data value', value)
      let stringed_value = value.toString();
      let fullnumber = stringed_value;
    let [ integer, fraction = "" ] = (stringed_value || "").toString()
      .split(this.DECIMAL_SEPARATOR);
      
      
    /*fraction = (fractionSize > 0) && stringed_value.indexOf(this.DECIMAL_SEPARATOR) > -1
      ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
      : ""; */

    //integer = integer.replace(/(\d)(?=(\d{3})+$)/g, '$1' + this.THOUSANDS_SEPARATOR);
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
    fullnumber = fullnumber.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);

      if(fraction && fraction.length > 2){
        fraction = this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize);
        fullnumber = integer + fraction;
      }
    
    return fullnumber;
  }

  parse(value: string, fractionSize: number = 2): string {
      console.log('Parse inside input', value);
      let integer = value;
    //let [ integer, fraction = "" ] = (value || "").split(this.DECIMAL_SEPARATOR);

    integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");

    /*fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
      ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
      : "";

      // YS: when . is first typed, need to able to skip removal
      if(fraction == '' && value.indexOf(this.DECIMAL_SEPARATOR) > -1){
        fraction = this.DECIMAL_SEPARATOR + fraction;
          console.log('Detected Here');
      } */
      console.log('Integer + Fraction', integer, 'Endfraction');
    return integer;
  }

  transformNew(value: number | string, fractionSize: number = 2, negative_parantheses: boolean = false): string {
    console.log('data value', value);
    console.log('negative parantheses', negative_parantheses);
    let transformed_number = '';

    if(value != null && value != undefined){
      let stringed_value = value.toString();
      let fullnumber = stringed_value;
      let [ integer, fraction = "" ] = (stringed_value || "").toString()
      .split(this.DECIMAL_SEPARATOR);
      
      
    /*fraction = (fractionSize > 0) && stringed_value.indexOf(this.DECIMAL_SEPARATOR) > -1
      ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
      : ""; */

    //integer = integer.replace(/(\d)(?=(\d{3})+$)/g, '$1' + this.THOUSANDS_SEPARATOR);
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
    fullnumber = fullnumber.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);

      if(fraction && fraction.length > 2){
        fraction = this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize);
        fullnumber = integer + fraction;
      }
      
      transformed_number = fullnumber;
      // YS: To handle Negative Case with parantheses
      if(value < 0 && negative_parantheses) {
          if(transformed_number.charAt(0) == '-'){
              transformed_number = transformed_number.slice(1);
          }            
          transformed_number = '(' + transformed_number + ')';
      }
    }
    
    console.log('Transformed Number', transformed_number);
    return transformed_number;
}

}