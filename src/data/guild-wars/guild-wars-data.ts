import war20200413 from './2020-04-13.json';
import war20200414 from './2020-04-14.json';
import war20200420 from './2020-04-20.json';
import war20200421 from './2020-04-21.json';
import war20200422 from './2020-04-22.json';
import war20200423 from './2020-04-23.json';
import war20200424 from './2020-04-24.json';

export class GuildWarsData {
  static data(): Array<{}> {
    return [war20200413, war20200414, war20200420, war20200421, war20200422, war20200423, war20200424];
  }
}
