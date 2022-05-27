import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  character!: Character;
  panelOpenState = false;
  show: boolean = false;

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);

    this.charactersService
      .getCharacterById(identifier)
      .subscribe((character) => {
        if (!character) {
          return this.router.navigateByUrl('/');
        }

        this.character = character;
        return console.log('Character --> ', this.character);
      });
  }

  showDetails(): void {
    this.show = true;
  }
}
