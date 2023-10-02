import Handlebars = require("handlebars");

const itemsTemplate = `
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">{{items.title}}</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<table>
<thead>
	<tr>
		<th>Header</th>
	</tr>
</thead>
	<tbody>
		{{#each items.items as |item itemId|}}
			<tr key={{itemId}}>
				<td>{{itemId}}</td>
				<td>{{item.name}}</td>
				<td>{{item.description}}</td>
			</tr>
		{{/each}}
	</tbody>
</table>`;
const itemsTemplateFunction = Handlebars.compile(itemsTemplate);
export const ItemsTable = (items) =>
	itemsTemplateFunction({
		items: items,
	});
