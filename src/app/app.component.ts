import { Component } from '@angular/core';
import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 53.402477;
  lng: number = -2.6676186;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		 //Anchorsholme (New) - North Site
		  lat: 53.870083,
		  lng: -3.046433,
		  label: 'A',
		  draggable: true
	  },
	  {
      // Crew - South
		  lat: 53.112794,
		  lng: -2.504451,
		  label: 'B',
		  draggable: false
	  },
	  {
      //Failsworth - East
		  lat: 53.495160,
		  lng: -2.158679,
		  label: 'C',
		  draggable: true
	  },
    {
      //Liverpool - West
		  lat: 53.427303,
		  lng: -2.999070,
		  label: 'D',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
