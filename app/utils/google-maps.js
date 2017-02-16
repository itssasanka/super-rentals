import Ember from 'ember';

const google = window.google;

export default Ember.Object.extend({

  init(){
    this.set('geocoder', new google.maps.Geocoder());
  },

  createMap(el, loc){
    let map = new google.maps.Map(el, {scrollwheel: false, zoom: 10});
    this.pinLocation(loc, map);
    return map;
  },

  pinLocation(loc, map){
    this.get('geocoder').geocode({address: loc}, (result, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        let geometry = result[0].geometry.location;
        let position = {lat: geometry.lat(), lng: geometry.lng()};
        map.setCenter(position);
        new google.maps.Marker({position, map, title: loc});
      }
    });
  }

});
