import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Pipe({          //decoratore pipe
  name: 'fullName'
  // Nome del pipe che verrà utilizzato nei template
})
export class FullNamePipe implements PipeTransform {    //definiamo la classe FullNamePipe che implementa l interfaccia PipeTransform

    transform(user: User): string {   // Metodo transform che prende un oggetto User e restituisce il nome completo


    if (!user) {         // Verifica se l'oggetto user è null o undefined
      return '';          // Se l'utente è null o undefined restituisce una stringa vuota
    }

    const { firstName, lastName } = user; // Destructuring di firstName e lastName dall'oggetto user

    return `${firstName} ${lastName}`;    // Restituisce il nome completo concatenando firstName e lastName

  }

}
