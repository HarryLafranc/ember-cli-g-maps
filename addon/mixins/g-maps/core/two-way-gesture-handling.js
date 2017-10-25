import Ember from 'ember';

const { observer } = Ember;

export default Ember.Mixin.create({

  /**
   * [observer for component attribute's `gestureHandling` updates]
   * @param  {Boolean} 'isMapLoaded'
   * @param  {[Boolean]}  'gestureHandling'
   * @return {[Boolean]} [returns false if map not updated]
   */
  _bindGestureHandlingToMap: observer('isMapLoaded', 'gestureHandling', function() {
    if (!this.get('isMapLoaded')) {
      return false;
    }

    this.get('map.map').setOptions({
      gestureHandling: this.get('gestureHandling')
    });
  }),
});
