export interface Res<T> {
    data: T;
    message: string; 
    status?: number; //for errors
 }