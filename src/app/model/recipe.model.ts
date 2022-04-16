export enum OrderType {
    TABLE = 'table',
    PACKING = 'packing'
};

export interface Recipe {
    title: string;
    imageUrl: string;
    uri: string;
    price: number;
    quantity: number;
    orderType: OrderType;
};

export enum Quantity {
    FULL = 1,
    HALF = 0.5,
    CUSTOM = 'custom'
}