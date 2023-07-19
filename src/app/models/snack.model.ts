export interface ISnack {
	id?: string;
	name: string;
	description: string;
	date: Date;
	time: Date;
	isDiet: boolean | number;
}

export interface ISnackResponse {
	snacks: ISnack[];
}

