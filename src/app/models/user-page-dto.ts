import {UserDto} from './user-dto';
import {PlayerCardDto} from './player-card-dto';

export interface UserPageDto {
  user: UserDto
  playerCard: PlayerCardDto
}
