import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, args: any[], todas: boolean = true): String {

        console.log(value);
        console.log(args);

        value = value.toLowerCase();

        const nombres = value.split(' ');

        // tslint:disable-next-line:forin
        if (todas) {
            // tslint:disable-next-line:forin
            for ( const i in nombres) {
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        } else {
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }

        return nombres.join(' ');
    }
}
