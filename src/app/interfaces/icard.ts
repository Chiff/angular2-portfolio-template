import {Ilink} from './ilink';

export interface ICard {
  title: string;
  description?: string;
  tags?: string[];
  links?: Ilink[];
}
