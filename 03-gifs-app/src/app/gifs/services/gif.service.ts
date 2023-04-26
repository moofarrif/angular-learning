import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'A6oK2KZjdEAZFnYolqsvByAWqWFldNni';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs Service ready');
  }

  get tagHistory(): string[] {
    return [...this._tagsHistory];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  private sortHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return;
    this.sortHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search?`, { params })
      .subscribe(({ data }) => (this.gifList = data));
  }
}
