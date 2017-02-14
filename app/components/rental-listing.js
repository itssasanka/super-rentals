import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    toggleSize(){
      this.toggleProperty('isWide');
    }
  }
});
