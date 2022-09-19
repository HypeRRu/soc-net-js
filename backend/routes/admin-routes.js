import express from "express";
import admin_controller from "../controllers/admin-controller.js";
const router = express.Router();

router.get("/", (req, res) => {
	admin_controller.render_all_records("users", req, res);
});

router.get("/messages", (req, res) => {
	admin_controller.render_all_records("messages", req, res);
});

router.get("/feed", (req, res) => {
	admin_controller.render_all_records("feed", req, res);
});

router.get("/user/create", (req, res) => {
	admin_controller.render_one_record("users", req, res);
});

router.get("/user/:id", (req, res) => {
	admin_controller.render_one_record("users", req, res);
});

router.get("/message/:id", (req, res) => {
	admin_controller.render_one_record("messages", req, res);
});

router.get("/post/:id", (req, res) => {
	admin_controller.render_one_record("feed", req, res);
});

/* not found page */
router.get("*", (req, res) => {
	res.status(404).end("Cannot find this page");
});

export default router;