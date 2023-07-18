import { Component, Input } from '@angular/core';
import { CharacterModel } from '@modules/characters/models/character.model';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.css'],
})
export class CardCharacterComponent {
  @Input() character!: CharacterModel;
  characterImageUrl = '../../../../../assets/img/def-img.jpeg';
  isLoadingImage = true;

  /**
   * Validacion de la imagen para saber si esta rota o no y si cargar una imagen por defecto
   */

  onImageLoad() {
    this.isLoadingImage = false;
  }

  ngOnChanges() {
    this.isLoadingImage = true;
  }
}
