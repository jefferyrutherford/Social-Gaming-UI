import {Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {PlayerCardDto} from '../../models/player-card-dto';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-player-card',
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent implements OnInit, OnChanges {
  isActive = false;
  @Input() playerCard: PlayerCardDto | undefined;
  playerPic: String | undefined;

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newCard = changes['playerCard']?.currentValue;
    console.log(newCard)
    if (newCard && newCard.photoID) {
      this.playerPic = environment.imageBaseUrl + newCard.photoID + '.jpg';
    } else {
      console.warn('ngOnChanges called but photoID was missing:', newCard);
      this.playerPic = '';
    }
  }

  ngOnInit(): void {
  }


  onClick() {
    console.log("Image is clicked");
    this.isActive = true;
  }


  onClose(event: Event) {
    event.stopPropagation(); // Prevent triggering the card's click
    this.isActive = false;
  }
}
