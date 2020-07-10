import { Character } from '../models/character.model';

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
}

export interface CharacterResponse {
    info: Info;
    results: Character[];
}

