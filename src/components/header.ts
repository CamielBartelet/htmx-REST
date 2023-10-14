import Handlebars = require("handlebars");

const navBarTemplate = `
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
            <div class="drawer-content flex flex-col">
                <!-- Navbar -->
                <div class="w-full navbar">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 
                    <div class="flex-1 px-2 mx-2">Camiel's portfolio</div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            {{#each items as |item itemId|}}
                                <li key={{itemId}} hx-get="/{{item.name}}" hx-target="#result" hx-swap="innerHTML transition:true">
                                    <a>{{item.description}}</a>
                                </li>
                            {{/each}}
                        </ul>
                    </div>
                </div>
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
                <ul class="menu p-4 w-80 min-h-full bg-base-200">
                    {{#each items as |item itemId|}}
                        <li key={{itemId}} hx-get="/{{item.name}}" hx-target="#result">
                            <a>{{item.description}}</a>
                        </li>
                    {{/each}}
                </ul>
            </div>
        </div>
`;
const navBarTemplateFunction = Handlebars.compile(navBarTemplate);
export const NavBar = (items) =>
	navBarTemplateFunction({
		items: items,
	});
