export interface IItem {
    id: string;
    text: string;
    level: number
    parentId: string
}
export interface IObject {
    [key: string]:number
}