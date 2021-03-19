export interface User {
    _id: string;
    username: string;
    password: string;
}

export interface Workout {
    _id: number;
    user_id: number;
    type: "бег" | "велосипед" | "лыжи" | "ходьба";
    date: string;
    length: number;
    comment: string;
}
