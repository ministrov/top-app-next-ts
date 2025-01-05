
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