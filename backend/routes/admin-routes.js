import express from "express";
import admin_controller from "../controllers/admin-controller.js";
const router = express.Router();

router.get("/", (req, res) => {
	const sidebar = admin_controller.get_sidebar();
	const navbar  = admin_controller.get_navbar();

	sidebar.elements[0].active = true;
	navbar.elements[0].active = true;

	res.render(
		"admin/index",
		{
			navbar : navbar,
			sidebar: sidebar,
			headers: admin_controller.get_user_header(),
			content: admin_controller.get_users()
		}
	);
});

router.get("/messages", (req, res) => {
	const sidebar = admin_controller.get_sidebar();
	const navbar  = admin_controller.get_navbar();

	sidebar.elements[1].active = true;
	navbar.elements[1].active = true;

	res.render(
		"admin/index",
		{
			navbar : navbar,
			sidebar: sidebar,
		}
	);
});

router.get("/feed", (req, res) => {
	const sidebar = admin_controller.get_sidebar();
	const navbar  = admin_controller.get_navbar();

	sidebar.elements[2].active = true;
	navbar.elements[2].active = true;

	res.render(
		"admin/index",
		{
			navbar : navbar,
			sidebar: sidebar,
		}
	);
});

/* not found page */
router.get("*", (req, res) => {
	res.status(404).end("Cannot find this page");
});

export default router;