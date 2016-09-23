import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'lodash' })
export class LodashPipe implements PipeTransform {
    transform(target: any, ...args: any[]): any {
        return _[args.shift()](target, ...args);
    }
}