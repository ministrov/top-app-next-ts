'use client';

import { createContext, PropsWithChildren } from 'react';

export interface IMyContext {
    text: number;
}

export const MyContext = createContext<IMyContext>({ text: 1 });

export const MyContextProvider = ({ text, children }: PropsWithChildren<IMyContext>) => {
    return <MyContext.Provider value={{ text }}>
        {children}
    </MyContext.Provider>
};