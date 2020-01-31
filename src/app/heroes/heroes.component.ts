import { Component, OnInit } from '@angular/core';
//IMPORTAMOS LA NUEVA CLASE
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //creamos un heroe
  //hero = "Windstorm";

//VOLVEMOS A CREAR EL HEROE A TRAVÉS DE UN OBJETO DE LA CLASE CREADA
  hero:Hero = {
    id:1,
    name:'Windstorm'

  }

  constructor() { }

  ngOnInit() {
    //inicialización del componente

  }

}
