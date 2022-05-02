export interface Comment {
    _id?: string;
    movie_id?: string | { link: string };
    name: string;
    text: string;
    date: string;
}
