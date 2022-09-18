import express from "express";
const router = express.Router();

/* not found page */
router.get("*", (req, res) => {
	res.status(404).end("Cannot find this page");
});

export default router;