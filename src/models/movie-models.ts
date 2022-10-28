export type Movie = {
    name: string;
    year: number;
    rating?: number;
    imdbId? : any;
    notes?: string | undefined | null;
    series?: string | undefined | null;
    firstTimeView?: any;
    dateWatched: number;
};

export type MoviesByDay = {
    day: number;
    movies: Movie[]
}