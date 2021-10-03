import * as React from 'react';
// import type { DrawOptions, EditOptions, ControlPosition } from 'leaflet';
import L from 'leaflet';


interface EditControlProps {
  onEdited?: Function;
  onDrawStart?: Function;
  onDrawStop?: Function;
  onDrawVertex?: Function;
  onEditStart?: Function;
  onEditMove?: Function;
  onEditResize?: Function;
  onEditVertex?: Function;
  onEditStop?: Function;
  onDeleted?: Function;
  onDeleteStart?: Function;
  onDeleteStop?: Function;

  onCreated?: Function,
  onMounted?: Function;
  draw: {
    polyline?: L.DrawOptions.PolylineOptions | boolean;
    polygon?: L.DrawOptions.PolygonOptions | boolean;
    rectangle?: L.DrawOptions.RectangleOptions | boolean;
    circle?: L.DrawOptions.CircleOptions | boolean;
    marker?: L.DrawOptions.MarkerOptions | boolean;
    circlemarker?: L.DrawOptions.CircleOptions | boolean;
  },


  position: ControlPosition,
}

export class EditControl extends React.Component<EditControlProps> {}
