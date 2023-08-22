import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kgTechTest02';
  enterText ='';
  outputText = '';
  enterNumber=0;

  onInput=( event: Event)=>{
    const value=parseInt((<HTMLInputElement>event.target).value);
      this.enterNumber=value
  }    

  enterInput=( event: Event)=>{
    const value=((<HTMLInputElement>event.target).value);
      this.enterText=value}
  
  onButtonClick(){
    this.outputText=this.enterText
    return alert("OK pressed")
  }
}
