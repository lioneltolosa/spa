import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'contrasena'
})

export class ContrasenaPipe implements PipeTransform {
    transform(value: any, active: boolean = true): any {

        if (active) {
            let salida: String = '';
            for (let i = 0; i < value.length; i++) {
                salida += '*';
            }
            return salida;
        } else {
            return value;
        }
    }
}
