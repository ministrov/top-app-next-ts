export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Goods
}

export interface TopPageAdvantage {
	_id: string;
	title: string;
	description: string;
}

export interface HhData {
	_id: string | undefined;
	count: number | undefined;
	juniorSalary: number | undefined;
	middleSalary: number | undefined;
	seniorSalary: number | undefined;
	updatedAt: Date | undefined;
}

export interface TopPageModel {
	tags: string[];
	_id: string;
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText?: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	firstCategory: TopLevelCategory;
	advantages?: TopPageAdvantage[];
	createdAt: Date;
	updatedAt: Date;
	hh?: HhData;
}