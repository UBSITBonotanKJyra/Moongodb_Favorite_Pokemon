import { Component } from '@angular/core';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonFormComponent],
  template: `<app-pokemon-form />`,
})
export class AppComponent {}
