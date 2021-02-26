export interface User {
    role: string;
}

export interface Ticket {
    id?: string;
    contact: string;
    place: string;
    problem: string;
    status: string;
    createdAt: Timestamp | Date;
    user: User;
}

export interface Timestamp {
    seconds: number;
    nanoseconds: number;
}
