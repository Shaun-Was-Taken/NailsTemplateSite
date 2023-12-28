"use client";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindowF,
} from "@react-google-maps/api";
import { useState } from "react";

export default function Intro() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDlMzZ9LdJWT47X3YyJA - WNwvSe_qd3yTU",
  });

  const pos = { lat: 39.00829315185547, lng: -94.8440933227539 };

  const [showInfoWindow, setShowInfoWindow] = useState(false);

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "initial" }}>
      <GoogleMap
        center={pos}
        zoom={15}
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
      >
        <Marker position={pos} onClick={() => setShowInfoWindow(true)} />
        {showInfoWindow && (
          <InfoWindowF
            position={pos}
            onCloseClick={() => setShowInfoWindow(false)}
          >
            <div>
              <h3>Lush Nails</h3>
              <p>22227 W 66th St Shawnee, KS 66226</p>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0aFTQ3nnG2zLf4vAKQalSi39Oc1SlYFzorY5Cd-ZtHUENN-Pva2OD6wn5C01ayLAm4rakfv7F1">
                Book An Appointment
              </a>
              <p></p>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3D39.008327210764%252C-94.844095716527%26fbclid%3DIwAR3WjgfypEY9irnciL-51PgMa-wYAh6P97ytw_HyC68QVZtNr3UqIiWdN1s&h=AT3y-b6WX-YvUPy_itwNS7sx0b5oKCkfaWTE4mQIR-VZpqgft4pdMNTmDYZAgw4zsNy7P34NE66JfSH9DkUFrpurA1z9Y1LGqsOke6P08Ff5YDZXaFHSCbGzuYsW7oZAUfosFqO3DQBaQm3pBGeh5Q">
                Directions
              </a>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </div>
  );
}
