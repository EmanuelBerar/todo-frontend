define('ember-paper/components/paper-dialog-container', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    classNames: ['md-dialog-container'],

    mouseDown: function mouseDown(ev) {
      this._sourceEl = ev.target;
    },
    mouseUp: function mouseUp(ev) {
      if (this._sourceEl === this.element && ev.target === this.element) {
        ev.stopPropagation();
        ev.preventDefault();
        this.sendAction('outsideClicked');
      }
    }
  });
});