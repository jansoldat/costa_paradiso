import { Beach } from "./Beach"


export const BeachList = ({ itemsCollection = [] }) => (
  <div className='beaches row'>
    {itemsCollection.map((item, i) => {
      return (
        <Beach
          {...item}
          key={item.id} {...item}
          image={item?.image?.data ? item.image?.data.attributes.url : null}
          mirrorImageIndex={0} />
      )
    })}
  </div>
)
