import { useState } from 'react';
import { GoogleMap, InfoWindowF, LoadScript, MarkerF } from '@react-google-maps/api';
import { useRootContext } from '~/context/root-context';


const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 41.054968,
  lng: 8.946079
};

const INFOBOX_TRANSLATION = {
  "en-US": {
    header: "Location of our apartment.",
    button: "Navigate"
  },
  "it-IT": {
    header: "Posizione del nosatro appartamento.",
    button: "Navigare"

  },
  "cs-CS": {
    header: "Poloha našeho apartmánu.",
    button: "Navigovat"
  }
}

export const Map = ({ languages_code, apiKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { googleMapsApiKey } = useRootContext()

  return (
    <LoadScript
      googleMapsApiKey={googleMapsApiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        clickableIcons={false}
        options={{ clickableIcons: false, panControl: false, zoomControl: false, fullscreenControl: false }}
        zoom={16}

      >
        <MarkerF
          position={center}
          onClick={() => setIsOpen(true)}
        >
          {isOpen &&
            <InfoWindowF
              onCloseClick={() => setIsOpen(false)}
            >
              <div style={{ margin: "12px", textAlign: "center" }} >
                <h2 style={{ marginBottom: '12px' }}>
                  {INFOBOX_TRANSLATION[languages_code].header}
                </h2>
                <a href="https://www.google.com/maps/dir//Parcheggio+Costa+Paradiso+Via+La+Piana,+419+07038+Costa+Paradiso+SS+It%C3%A1lie/@41.054327,8.9471656,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x12dbf1814fc123c7:0xc257fe98e7fe9ed2" className="form__button">
                  {INFOBOX_TRANSLATION[languages_code].button}
                </a>
              </div>
            </InfoWindowF>}
        </MarkerF>
      </GoogleMap>
    </LoadScript>)
}
