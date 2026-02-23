import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-component',
  imports: [],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {
presidents: string[] = ["Higgins", "McAlleses", "Robinson", "Hillery"];

mypresidents: any[] =
[{name: "Higgins", term:"2011-"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}];
}
