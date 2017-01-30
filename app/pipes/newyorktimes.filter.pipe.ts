import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'FilterPosts'})
export class FilterPosts implements PipeTransform {

    transform(value:any, args:any): any {

        if (args === undefined) return value;

        return value.filter(function (val:any) {
            return (val.title.toLowerCase().includes(args.toLowerCase())) || (val.abstract.toLowerCase().includes(args.toLowerCase())); // true/false
        })

    }
}