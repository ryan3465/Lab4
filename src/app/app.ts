import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import the list component
import { ListComponent } from './list-component/list-component';

@Component({
  selector: 'app-root',
  //add list component to imports
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-app');
  //declare variables
  count: number = 0;
  hide: boolean = false;
  
  //function that hides star 
  onImageDoubleClick(){
    if(this.hide == false){
      this.hide = true;
    } else{
      this.hide = false;
    }
  }

  //when button is clicked add 1 to the count
  onClickButton(){
    this.count++;
  }
}

