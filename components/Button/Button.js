import "./Button.css";

export const Button = (icon, text, url) => `
<button class="my-btn">
<img src=${icon} alt='${text} icon'/>
<a href="${url}"><h5>${text}</h5></a>
</button>
`;