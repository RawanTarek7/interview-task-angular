import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetActivityService {
  activity1: string[] = ['studing js', 'at 15'];
  activity2: string[] = ['sleep well ', 'at 22'];
  activity3: string[] = ['dring water', 'at every hour'];
  constructor() {}

  getActivity1(): string[] {
    return this.activity1;
  }
  getActivity2(): string[] {
    return this.activity2;
  }
  getActivity3(): string[] {
    return this.activity3;
  }
}
