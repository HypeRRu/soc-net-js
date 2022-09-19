import https from "https";
import express from "express";
import routes from "./routes/admin-routes.js";
import { ssl_options } from "./storage-manager.js";
/* create application */
const application = express();

/* include static content */
application.use( express.static( "public" ) );
application.use( express.static( "node_modules" ) );

/* set router and view engine */
application.use(express.json());
application.use("/admin", routes);
application.set("view engine", "ejs");
application.set("views", "public/views");

/* set server */
const server = https.createServer(
	ssl_options,
	application
);
server.listen(8443);
