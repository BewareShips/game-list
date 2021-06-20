
export type Game = {
	id: number;
	title: string;
	thumbnail: string;
	short_description: string;
	description?: string;
	status?: string;
	game_url: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
	minimum_system_requirements?: MinRequirements;
	screenshots?: any[];
};

export type Filter = {
	platform: string;
	genre?: string;
	tag?: string;
	sortBy?: string;
};

export type Response = {
	games: Game[];
	error?: string;
};

export type MinRequirements = {
	os: string;
	processor: string;
	memory: string;
	graphics: string;
	storage: string;
};