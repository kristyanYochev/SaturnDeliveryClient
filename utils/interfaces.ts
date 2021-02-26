export interface User {
    role: string;
}

export interface Order {
    fromAddress: string;
    toAddress: string;
    notes: string;
    state: string;
}
