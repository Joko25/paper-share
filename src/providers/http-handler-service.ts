
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class HttpHandlerService {
  emitter401: EventEmitter<any> = new EventEmitter();
  constructor(
  ) { }
}