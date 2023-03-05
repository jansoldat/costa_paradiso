import svg from "~/icons/five_minutes.svg"

export const Beach = ({ image, translations }) => (
  <div className="beaches__element" >
    {image ? <img loading="lazy" src={image} alt={`${translations?.[0].name} beach`} className="beaches__img lazy-img" /> : <img alt="Five minutes icon" className="beaches__img" src={svg} />}

    <h3 className="beaches__category">{translations[0].category}</h3>
    <h4 className="beaches__name">{translations[0].name || "\u00A0"}</h4>
    <p className="beaches__description">{translations[0].description}</p>
  </div>
)
