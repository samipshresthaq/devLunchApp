export enum OrderType {
    TABLE = 'table',
    PACKING = 'packing'
};

export interface Card {
    title: string;
    imageUrl: string;
    uri: string;
    price: number;
    quantity: number;
    orderType: OrderType;
};