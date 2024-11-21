import "./GaleryCard.css";

export const GaleryCard = (galery) => `
<div class="galery-card">
<p>${galery.description}</p>
<h2>${galery.title}</h2>
<img src=${galery.image} alt=${galery.title}/>
</div>
`;