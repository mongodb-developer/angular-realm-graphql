export interface Movie {
    _id?: string;
    title?: string;
    year?: number;
    rated?: string;
    released?: string;
    plot?: string;
    fullplot?: string;
    type?: string;
    poster?: string;
    runtime?: number;
    directors?: string[];
    genres?: string[];
    imdb?: {
        rating: number;
    };
    tomatoes?: {
        viewer?: {
            meter: number;
        }
        critic?: {
            meter: number;
        }
    }
}
