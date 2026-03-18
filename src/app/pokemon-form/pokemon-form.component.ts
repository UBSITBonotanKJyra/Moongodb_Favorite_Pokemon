import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css',
})
export class PokemonFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  pokemonService = inject(PokemonService);

  pokemonForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    level: [1, [Validators.required, Validators.min(1)]],
    nature: ['', Validators.required],
  });

  ngOnInit() {
    this.pokemonService.fetchPokemon();
  }

  onSubmit() {
    if (this.pokemonForm.valid) {
      this.pokemonService.savePokemon(this.pokemonForm.getRawValue()).subscribe(() => {
        this.pokemonService.fetchPokemon();
        this.pokemonForm.reset();
      });
    }
  }
}
