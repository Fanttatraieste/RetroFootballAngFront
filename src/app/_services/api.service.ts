import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class APIService {
    private URL = 'http://127.0.0.1:3000/api/v1';

    constructor() {}

    async getAllIcons() {
        const res = await fetch(`${this.URL}/icons`);
        const data = await res.json();
        
        return data.data.icons;
    }

    async getLatestIcons(nr: number) {
        const res = await fetch(`${this.URL}/icons?sort=-retired&limit=${nr}`);
        const data = await res.json();

        return data.data.icons;
    }
}