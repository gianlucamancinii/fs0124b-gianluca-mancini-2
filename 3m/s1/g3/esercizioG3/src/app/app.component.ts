import { Component } from '@angular/core';
import { iArticolo } from './articolo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'esercizioG3';
  articoliArr:iArticolo[]= []

ngOnInit(){
  fetch('../assets/db.json')
  .then(articoli => articoli.json())
  .then(articolo=>{
    this.articoliArr= articolo.posts
    this.generateRandomArray()
  })
}
generateRandomNumber(){
  let index:number = Math.floor(Math.random() * this.articoliArr.length)
  return index
}

randomArray:iArticolo[] = []

generateRandomArray(){
  for(let i = 0; i < 4; i++){
    this.randomArray.push(this.articoliArr[this.generateRandomNumber()])
  }
}
}
