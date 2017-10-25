import Ember from 'ember';
import twoWayGestureHandling from 'ember-cli-g-maps/mixins/g-maps/core/two-way-gesture-handling';
import { module, test } from 'qunit';

module('Unit | Mixin | g maps/core/two way gesture handling');

test('_bindGestureHandlingToMap should not update map if `isMapLoaded` = false', function(assert) {
  const twoWayGestureHandlingObject = Ember.Object.extend(twoWayGestureHandling);
  const subject = twoWayGestureHandlingObject.create();

  subject.setProperties({ gestureHandling: "cooperative", isMapLoaded: false });
  assert.equal(subject._bindGestureHandlingToMap(), false, 'should not have updated map');
});

test('_bindGestureHandlingToMap observer should update map if `isMapLoaded` = true', function(assert) {
  assert.expect(1);

  const twoWayGestureHandlingObject = Ember.Object.extend(twoWayGestureHandling);
  const subject = twoWayGestureHandlingObject.create();

  subject.setProperties({
    gestureHandling: "cooperative",
    isMapLoaded: false,
    map: {
      map: {
        setOptions: function(option) {
          assert.equal(option.gestureHandling, subject.get('gestureHandling'), 'should recieve `subject.gestureHandling`');
        }
      }
    }
  });

  subject.set('isMapLoaded', true);
});
