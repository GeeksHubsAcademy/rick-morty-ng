import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  // providers: [CharacterService]
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<Character[]>;
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters();
    // this.characters$.subscribe(characters => this.characters = characters)
    this.characters$ = this.characterService.characters$;
    // .subscribe(console.log);
  }

}
