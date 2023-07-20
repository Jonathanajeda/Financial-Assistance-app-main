// data.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private personalInfoList: any[] = []; // Replace 'any[]' with the actual type of your entry data

  constructor() {}

  setData(data: any[]) {
    this.personalInfoList = data;
  }

  getData(): any[] {
    return this.personalInfoList;
  }

  
}
