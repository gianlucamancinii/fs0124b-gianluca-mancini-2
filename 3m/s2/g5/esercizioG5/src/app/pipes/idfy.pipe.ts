import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idfy'
})
export class IdPipe implements PipeTransform {      // Definizione della classe IdPipe che implementa l'interfaccia PipeTransform

  transform(value: number, prefix: string): string {        // Metodo transform che prende un valore numerico e un prefisso e restituisce una stringa

    return `${prefix}_${value}`;       // Concatena il prefisso con il valore numerico, separati da un underscore

  }

}
