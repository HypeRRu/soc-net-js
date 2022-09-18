import fs from "fs";

export const ssl_options = {
	key: fs.readFileSync("backend/ssl/socnet.key"),
	cert: fs.readFileSync("backend/ssl/socnet.crt")
};