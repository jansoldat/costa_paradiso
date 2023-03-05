import { useRootContext } from "~/context/root-context";
import { getDirectusImage } from "~/utils";
import { Beach } from "./Beach"


export const BeachList = ({ items = [] }) => {
  const { apiUrl } = useRootContext()
  return (
    <div className='beaches row'>
      {items.map((item, i) => {
        return (
          <Beach
            {...item}
            key={item.id} {...item}
            image={item?.image ? getDirectusImage({ asset: item.image, apiUrl, name: "beach-icon.webp" }) : null}
            mirrorImageIndex={0} />
        )
      })}
    </div>
  )
}
