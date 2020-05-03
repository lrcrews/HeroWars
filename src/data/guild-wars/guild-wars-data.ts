import { GuildWar } from '../../models/guild-war';

import { war as war20200420 } from './2020-04-20';
import { war as war20200421 } from './2020-04-21';
import { war as war20200422 } from './2020-04-22';
import { war as war20200423 } from './2020-04-23';
import { war as war20200424 } from './2020-04-24';
import { war as war20200427 } from './2020-04-27';
import { war as war20200428 } from './2020-04-28';
import { war as war20200429 } from './2020-04-29';
import { war as war20200430 } from './2020-04-30';
import { war as war20200501 } from './2020-05-01';

export class GuildWarsData {
  static data(): Array<GuildWar> {
    return [
      war20200420,
      war20200421,
      war20200422,
      war20200423,
      war20200424,
      war20200427,
      war20200428,
      war20200429,
      war20200430,
      war20200501,
    ];
  }
}