import { createContext } from 'react';

export interface IMyContext {
    text: number;
}

export const MyContext = createContext<IMyContext>({ text: 1 }); 