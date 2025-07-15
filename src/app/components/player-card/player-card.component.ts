import {Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {PlayerCardDto} from '../../models/player-card-dto';

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
    changes['playerCard']?.currentValue ? this.playerPic = "/assets/playerCard/" + this.playerCard?.playerCardID + ".jpg" : null;
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
