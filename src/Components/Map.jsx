import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
const Leaflet= () => {

    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
      map.locate()
    },
        locationfound(e) {
         setPosition(e.latlng)
         map.flyTo(e.latlng, map.getZoom())
    },
  })

    return ( 
        <div className="h-[50px]">
            <MapContainer
            className='h-[50px]' 
            center={[51.505, -0.09]} 
            zoom={13} 
            scrollWheelZoom={false}>
            <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={pos}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
     );
}
 
export default Leaflet;
