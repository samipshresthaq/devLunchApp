import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  private BASE_PATH: string = 'http://localhost:3004/'
  constructor() { }

  public getResetUrl( path: string = ''): string{
    return this.BASE_PATH+path;
  }
}
