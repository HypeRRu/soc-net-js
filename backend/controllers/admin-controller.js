import { users, friends, feed } from "../storage-manager.js";

class AdminController
{
	get_users()
	{
		return users;
	}

	get_user_header()
	{
		return [
			{
				name: "id",
				label: "#"
			},
			{
				name: "name",
				label: "ФИО"
			},
			{
				name: "birthdate",
				label: "Дата Рождения"
			},
			{
				name: "email",
				label: "Email"
			},
			{
				name: "image",
				label: "Фотография"
			},
			{
				name: "role",
				label: "Роль"
			},
			{
				name: "status",
				label: "Статус"
			}
		];
	}

	get_navbar()
	{
		return {
			brand: {
				name: "Social Network",
				link: "/admin"
			},
			elements: [
				{
					name: "Home",
					link: "/admin"
				},
				{
					name: "Messages",
					link: "/admin/messages"
				},
				{
					name: "Feed",
					link: "/admin/feed"
				}
			]
		};
	}

	get_sidebar()
	{
		return {
			brand: {
				name: "Admin Page",
				link: "/admin"
			},
			elements: [
				{
					name: "Home",
					link: "/admin"
				},
				{
					name: "Messages",
					link: "/admin/messages"
				},
				{
					name: "Feed",
					link: "/admin/feed"
				}
			]
		};
	}
};

const controller = new AdminController();
export default controller;