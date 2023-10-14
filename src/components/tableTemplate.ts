import Handlebars = require("handlebars");

const itemsTemplate = `
<div class="hero min-h-screen" style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">{{items.title}}</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
