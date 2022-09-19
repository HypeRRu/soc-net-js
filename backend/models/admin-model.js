import { users, friends, feed } from "../storage-manager.js";

export default class
{
	get_users()
	{
		return users;
	}

	get_user(id)
	{
		for (let user of users.data)
		{
			if (user.id == id)
				return user;
		}
		return null;
	}

	get_user_fields()
	{
		return [
			{
				name: "id",
				label: "ID",
				type: "text",
				readonly: true
			},
			{
				name: "name",
				label: "ФИО",
				type: "text"
			},
			{
				name: "birthdate",
				label: "Дата Рождения",
				type: "date"
			},
			{
				name: "email",
				label: "Email",
				type: "email"
			},
			{
				name: "image",
				label: "Фотография",
				type: "image"
			},
			{
				name: "role",
				label: "Роль",
				type: "select",
				options: [
					{
						value: "user",
						label: "Пользователь"
					},
					{
						value: "moderator",
						label: "Модератор"
					},
					{
						value: "admin",
						label: "Администратор"
					}
				]
			},
			{
				name: "status",
				label: "Статус",
				type: "select",
				options: [
					{
						value: "unconfirmed",
						label: "Не подтвержден"
					},
					{
						value: "confirmed",
						label: "Подтвержден"
					},
					{
						value: "deleted",
						label: "Удален"
					}
				]
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
