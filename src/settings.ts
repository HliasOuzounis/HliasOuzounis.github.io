import { file } from "astro/loaders"

export const profile = {
	fullName: 'Ilias Ouzounis',
	title: '',
	institute: '',
	author_name: 'Ouzounis I.', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Geometric Deep Learning', description: 'Utilizing symmetries of data to improve AI', field: 'Computer Science' },
		{ title: 'Computer Vision', description: 'Allowing machines to interpret and understand the visual world', field: 'Computer Science' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'iliouzoun@outlook.com',
	linkedin: 'www.linkedin.com/in/ilias-ouzounis-1343722b9',
	x: '',
	github: 'https://github.com/HliasOuzounis',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
