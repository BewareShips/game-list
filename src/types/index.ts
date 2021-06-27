
export type Game = {
	id: number;
	title: string;
	thumbnail: string;
	short_description: string;
	game_url: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
};

export type SingleGame = {
	id: number;
	title: string;
	thumbnail: string;
	status: string;
	short_description: string;
	description: string;
	game_url: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
	minimum_system_requirements: MinRequirements;
	screenshots?: ScreenImg[];
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

export type ScreenImg = {
	id: number;
	image: string
}