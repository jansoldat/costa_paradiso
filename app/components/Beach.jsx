import svg from "~/icons/five_minutes.svg";

export const Beach = ({ name, category, description, imageUrl }) => (
  <div className="beaches__element" >
    {imageUrl ? <img loading="lazy" src={imageUrl} alt={`${name} beach`} className="beaches__img lazy-img" /> : <img alt="Five minutes icon" className="beaches__img" src={svg} />}

    <h3 className="beaches__category">{category}</h3>
    <h4 className="beaches__name">{name || "\u00A0"}</h4>
    <p className="beaches__description">{description}</p>
  </div>
)
