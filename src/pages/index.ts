// import Handlebars = require("handlebars");

export const landingPage = `
<!DOCTYPE html>
<html>

<head>
    <script src="https://unpkg.com/htmx.org@1.9.4" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/htmx.org/dist/ext/debug.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    <link href="/dist/output.css" rel="stylesheet">
    <style>
        @keyframes fade-in {
            from {
                opacity: 0;
            }
        }

        @keyframes fade-out {
            to {
                opacity: 0;
            }
        }

        @keyframes slide-from-right {
            from {
                transform: translateX(90px);
            }
        }

        @keyframes slide-to-left {
            to {
                transform: translateX(-90px);
            }
        }

        .slide-it {
            view-transition-name: slide-it;
        }

        ::view-transition-old(slide-it) {
            animation: 180ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
                600ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
        }

        ::view-transition-new(slide-it) {
            animation: 420ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
                600ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
        }
    </style>
</head>

<body>
    <div class="headerWrapper sticky top-0" hx-get="/header" hx-trigger="load"></div>
    <div class="contentWrapper">
        <div class="slide-it" id="result" hx-get="/home" hx-trigger="load"></div>
    </div>
    <div class="footerWrapper">
        <div hx-get="/footer" hx-trigger="load"></div>
    </div>
</body>

</html>
`;
// const footerTemplateFunction = Handlebars.compile(footerTemplate);
// export const Footer = (items) =>
// 	footerTemplateFunction({
// 		items: items,
// 	});
