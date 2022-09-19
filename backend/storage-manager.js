import fs from "fs";

export const ssl_options = {
	key: fs.readFileSync("backend/ssl/socnet.key"),
	cert: fs.readFileSync("backend/ssl/socnet.crt")
};

const users = {
	get data()
	{
		return this.__data;
	},
	set data(value)
	{
		this.__data = value;
		fs.writeFileSync("backend/storage/users.json");
	},
	__data: JSON.parse(
		fs.readFileSync("backend/storage/users.json")
	)
};

const friends = {
	get data()
	{
		return this.__data;
	},
	set data(value)
	{
		this.__data = value;
		fs.writeFileSync("backend/storage/friends.json");
	},
	__data: JSON.parse(
		fs.readFileSync("backend/storage/friends.json")
	)
};

const feed = {
	get data()
	{
		return this.__data;
	},
	set data(value)
	{
		this.__data = value;
		fs.writeFileSync("backend/storage/feed.json");
	},
	__data: JSON.parse(
		fs.readFileSync("backend/storage/feed.json")
	)
};

const images = {
	get data()
	{
		return this.__data;
	},
	set data(value)
	{
		this.__data = value;
		fs.writeFileSync("backend/storage/images.json");
	},
	__data: JSON.parse(
		fs.readFileSync("backend/storage/images.json")
	)
};

export { users, friends, feed, images };