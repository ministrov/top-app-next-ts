import { JSX } from 'react';
// import { TopLevelCategory } from './page.interface';

export interface PageItem {
    alias: string;
    title: string;
    id: string;
    category: string;
}

export interface MenuItem {
    id: {
        secondaryCategory: string;
    };
    isOpened?: boolean;
    pages: PageItem[];
}

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	// id: TopLevelCategory;
}