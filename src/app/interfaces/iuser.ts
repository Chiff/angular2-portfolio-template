import {Ilink} from './ilink';

export interface IUser {
  name: string;
  job: string;
  skills?: string[];
  links?: Ilink[];
}
