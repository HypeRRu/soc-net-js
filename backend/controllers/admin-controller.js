import AdminModel from "../models/admin-model.js";

class AdminController
{
	#model = null;

	constructor()
	{
		this.#model = new AdminModel();
	}

	render_all_records(context, req, res)
	{
		const sidebar = this.#model.get_sidebar();
		const navbar  = this.#model.get_navbar();

		let headers = null;
		let content = null;

		switch (context)
		{
			case "users":
				this.#set_label_active(navbar, 0);
				this.#set_label_active(sidebar, 0);

				headers = this.#model.get_user_fields();
				content = JSON.parse(JSON.stringify(this.#model.get_users().data));
				break;
			case "messages":
				this.#set_label_active(navbar, 1);
				this.#set_label_active(sidebar, 1);
				break;
			case "feed":
				this.#set_label_active(navbar, 2);
				this.#set_label_active(sidebar, 2);
				break;
			default:
				res.status(400).end("Bad Request");
				return;
		}

		this.#add_controls(context, headers, content);

		res.render(
			"admin/index",
			{
				navbar  : navbar,
				sidebar : sidebar,
				headers : headers,
				content : content
			}
		);
		return;
	}

	render_one_record(context, req, res)
	{
		const sidebar = this.#model.get_sidebar();
		const navbar  = this.#model.get_navbar();

		let headers = null;
		let content = null;
		let exists  = false;

		switch (context)
		{
			case "users":
				headers = this.#model.get_user_fields();
				if (req.params.id)
				{
					content = this.#model.get_user(req.params.id);
					exists  = true;
				} else
				{
					content = {};
					exists  = false;
				}
				break;
			case "messages":
				break;
			case "feed":
				break;
			default:
				res.status(400).end("Bad Request");
				return;
		}

		if (content || !exists)
		{
			res.render(
				"admin/record",
				{
					exists : exists,
					navbar : navbar,
					sidebar: sidebar,
					headers: headers,
					content: content
				}
			);
		} else
		{
			res.status(404).end("Record not found!");
		}
		return;
	}

	#set_label_active(bar, index, flag = true)
	{
		bar.elements[index].active = true;
	}

	#add_controls(context, headers, content)
	{
		let route = "";
		switch (context)
		{
			case "users":
				route = "user";
				break;
			case "messages":
				route = "message";
				break;
			case "feed":
				route = "post";
				break;
			default:
				return;
		}

		headers?.push({
			name: "controls",
			label: "",
			type: "link"
		});

		if (content)
		{
			for (let row of content)
				row.controls = this.#generate_controls_for_record(row, route);
		}	
	}

	#generate_controls_for_record(row, route)
	{
		return {
			href: `/admin/${route}/${row.id}`,
			label: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
			  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
			</svg>`
		};
	}
};

const controller = new AdminController();
export default controller;
