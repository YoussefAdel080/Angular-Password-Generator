import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw';
  length = 0;
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onChangeLength(event:Event)
  {
    const parsedValue = parseInt(((event.target as HTMLInputElement).value));
    if(!isNaN(parsedValue))
    {
      this.length = parsedValue;
    }
  };

  onChangeUseLetters()
  {
    this.useLetters = !this.useLetters
  };

  onChangeUseNumbers()
  {
    this.useNumbers = !this.useNumbers
  };

  onChangeUseSymbols()
  {
    this.useSymbols = !this.useSymbols
  };

  onButtonClick()
  {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*?()'

    let validChars = '';
    if(this.useLetters){validChars += letters}

    if(this.useNumbers){validChars += numbers}

    if(this.useSymbols){validChars += symbols}

    let generatedPassword = '';
    for(let i = 0; i < this.length ; i++)
    {
      const index = Math.floor(Math.random()*validChars.length)
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  };
}
