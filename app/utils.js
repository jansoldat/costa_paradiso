

export const getDirectusImage = ({ asset, name, apiUrl, ...params }) => `${apiUrl}assets/${asset}/${name}?${(new URLSearchParams(params)).toString()}`

export const getBackgroundFallbackImage = ({ asset, supportsWebP = true, name, format = "jpg", ...rest }) => supportsWebP
  ? `url("${getDirectusImage({ asset, name: `${name}.webp`, ...rest })}")`
  : `url("${getDirectusImage({ asset, name: `${name}.${format}`, format: format, ...rest })}")`
