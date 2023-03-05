import { AirConditioning, Bill, Car, CheckIn, DebitCard, Garage, Search, Sunset, Terrace, Towels, Wifi } from "./icons"

export const SvgIcon = ({ icon, ...rest }) => {
  if (icon === "air-conditioning") return <AirConditioning {...rest} />
  if (icon === "search") return <Search {...rest} />
  if (icon === "garage") return <Garage {...rest} />
  if (icon === "sunset") return <Sunset {...rest} />
  if (icon === "towels") return <Towels {...rest} />
  if (icon === "terrace") return <Terrace {...rest} />
  if (icon === "wifi") return <Wifi {...rest} />
  if (icon === "car") return <Car {...rest} />
  if (icon === "check-in") return <CheckIn {...rest} />
  if (icon === "bill") return <Bill {...rest} />
  if (icon === "debit-card") return <DebitCard {...rest} />
  return null;
}
