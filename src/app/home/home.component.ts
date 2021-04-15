import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';



@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela:  boolean = false;
  exibirInfo: boolean = false;

  listaAlunos: alunos[] = [
    { lugar: 1, pais: 'China'},
    { lugar: 2, pais: 'Estados Unidos'},
    { lugar: 3, pais: 'Alemanha'},
    { lugar: 4, pais: 'Índia'},
    { lugar: 5, pais: 'Brasil'},
  ];

  displayedColumns: string[] = ['lugar', 'País'];

  ngOnInit(): void {
    this.valor = 5;
  }



  exibirTabela(){
    this.exibeTabela = true;
    
  }

 
  }
