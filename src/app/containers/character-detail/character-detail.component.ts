import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/models/character.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  character: Character;
  // paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit(): void {
    // this.paramsSubscription = 
    this.route.params.subscribe(params => {
      this.characterService.getCharacter(params.id)
        .subscribe(character => this.character = character);
    });
  }
  ngOnDestroy(): void {
    // this.paramsSubscription.unsubscribe();
  }
}
