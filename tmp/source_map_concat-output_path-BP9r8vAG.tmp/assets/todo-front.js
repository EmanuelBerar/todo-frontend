"use strict";



define('todo-front/app', ['exports', 'ember', 'todo-front/resolver', 'ember-load-initializers', 'todo-front/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('todo-front/components/as-scrollable', ['exports', 'ember-scrollable/components/ember-scrollable'], function (exports, _emberScrollable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberScrollable.default.extend({
    classNames: 'as-scrollable'
  });
});
define('todo-front/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('todo-front/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
define('todo-front/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('todo-front/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('todo-front/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _positionedContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
define('todo-front/components/ember-modal-dialog/-basic-dialog', ['exports', 'ember-modal-dialog/components/basic-dialog'], function (exports, _basicDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
define('todo-front/components/ember-modal-dialog/-in-place-dialog', ['exports', 'ember-modal-dialog/components/in-place-dialog'], function (exports, _inPlaceDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
define('todo-front/components/ember-modal-dialog/-liquid-dialog', ['exports', 'ember-modal-dialog/components/liquid-dialog'], function (exports, _liquidDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
define('todo-front/components/ember-modal-dialog/-liquid-tether-dialog', ['exports', 'ember-modal-dialog/components/liquid-tether-dialog'], function (exports, _liquidTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
define('todo-front/components/ember-modal-dialog/-tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _tetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
define('todo-front/components/ember-scrollable', ['exports', 'ember-scrollable/components/ember-scrollable'], function (exports, _emberScrollable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberScrollable.default;
    }
  });
});
define('todo-front/components/ember-scrollbar', ['exports', 'ember-scrollable/components/ember-scrollbar'], function (exports, _emberScrollbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberScrollbar.default;
    }
  });
});
define('todo-front/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('todo-front/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _modalDialogOverlay) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialogOverlay.default;
    }
  });
});
define('todo-front/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});
define('todo-front/components/paper-autocomplete-content', ['exports', 'ember-paper/components/paper-autocomplete-content'], function (exports, _paperAutocompleteContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteContent.default;
});
define('todo-front/components/paper-autocomplete-dropdown', ['exports', 'ember-paper/components/paper-autocomplete-dropdown'], function (exports, _paperAutocompleteDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteDropdown.default;
});
define('todo-front/components/paper-autocomplete-highlight', ['exports', 'ember-paper/components/paper-autocomplete-highlight'], function (exports, _paperAutocompleteHighlight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocompleteHighlight.default;
    }
  });
});
define('todo-front/components/paper-autocomplete-options', ['exports', 'ember-paper/components/paper-autocomplete-options'], function (exports, _paperAutocompleteOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocompleteOptions.default;
    }
  });
});
define('todo-front/components/paper-autocomplete-trigger-container', ['exports', 'ember-paper/components/paper-autocomplete-trigger-container'], function (exports, _paperAutocompleteTriggerContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteTriggerContainer.default;
});
define('todo-front/components/paper-autocomplete-trigger', ['exports', 'ember-paper/components/paper-autocomplete-trigger'], function (exports, _paperAutocompleteTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteTrigger.default;
});
define('todo-front/components/paper-autocomplete', ['exports', 'ember-paper/components/paper-autocomplete'], function (exports, _paperAutocomplete) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocomplete.default;
    }
  });
});
define('todo-front/components/paper-backdrop', ['exports', 'ember-paper/components/paper-backdrop'], function (exports, _paperBackdrop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperBackdrop.default;
});
define('todo-front/components/paper-button', ['exports', 'ember-paper/components/paper-button'], function (exports, _paperButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperButton.default;
});
define('todo-front/components/paper-card-actions', ['exports', 'ember-paper/components/paper-card-actions'], function (exports, _paperCardActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardActions.default;
});
define('todo-front/components/paper-card-avatar', ['exports', 'ember-paper/components/paper-card-avatar'], function (exports, _paperCardAvatar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardAvatar.default;
});
define('todo-front/components/paper-card-content', ['exports', 'ember-paper/components/paper-card-content'], function (exports, _paperCardContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardContent.default;
});
define('todo-front/components/paper-card-header-headline', ['exports', 'ember-paper/components/paper-card-header-headline'], function (exports, _paperCardHeaderHeadline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderHeadline.default;
});
define('todo-front/components/paper-card-header-subhead', ['exports', 'ember-paper/components/paper-card-header-subhead'], function (exports, _paperCardHeaderSubhead) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderSubhead.default;
});
define('todo-front/components/paper-card-header-text', ['exports', 'ember-paper/components/paper-card-header-text'], function (exports, _paperCardHeaderText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderText.default;
});
define('todo-front/components/paper-card-header-title', ['exports', 'ember-paper/components/paper-card-header-title'], function (exports, _paperCardHeaderTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderTitle.default;
});
define('todo-front/components/paper-card-header', ['exports', 'ember-paper/components/paper-card-header'], function (exports, _paperCardHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeader.default;
});
define('todo-front/components/paper-card-icon-actions', ['exports', 'ember-paper/components/paper-card-icon-actions'], function (exports, _paperCardIconActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardIconActions.default;
});
define('todo-front/components/paper-card-image', ['exports', 'ember-paper/components/paper-card-image'], function (exports, _paperCardImage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardImage.default;
});
define('todo-front/components/paper-card-media', ['exports', 'ember-paper/components/paper-card-media'], function (exports, _paperCardMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardMedia.default;
});
define('todo-front/components/paper-card-title-media', ['exports', 'ember-paper/components/paper-card-title-media'], function (exports, _paperCardTitleMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitleMedia.default;
});
define('todo-front/components/paper-card-title-text', ['exports', 'ember-paper/components/paper-card-title-text'], function (exports, _paperCardTitleText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitleText.default;
});
define('todo-front/components/paper-card-title', ['exports', 'ember-paper/components/paper-card-title'], function (exports, _paperCardTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitle.default;
});
define('todo-front/components/paper-card', ['exports', 'ember-paper/components/paper-card'], function (exports, _paperCard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCard.default;
});
define('todo-front/components/paper-checkbox', ['exports', 'ember-paper/components/paper-checkbox'], function (exports, _paperCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCheckbox.default;
});
define('todo-front/components/paper-chips', ['exports', 'ember-paper/components/paper-chips'], function (exports, _paperChips) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperChips.default;
});
define('todo-front/components/paper-contact-chips', ['exports', 'ember-paper/components/paper-contact-chips'], function (exports, _paperContactChips) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperContactChips.default;
});
define('todo-front/components/paper-content', ['exports', 'ember-paper/components/paper-content'], function (exports, _paperContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperContent.default;
});
define('todo-front/components/paper-dialog-actions', ['exports', 'ember-paper/components/paper-dialog-actions'], function (exports, _paperDialogActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogActions.default;
    }
  });
});
define('todo-front/components/paper-dialog-container', ['exports', 'ember-paper/components/paper-dialog-container'], function (exports, _paperDialogContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogContainer.default;
    }
  });
});
define('todo-front/components/paper-dialog-content', ['exports', 'ember-paper/components/paper-dialog-content'], function (exports, _paperDialogContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogContent.default;
    }
  });
});
define('todo-front/components/paper-dialog-inner', ['exports', 'ember-paper/components/paper-dialog-inner'], function (exports, _paperDialogInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogInner.default;
    }
  });
});
define('todo-front/components/paper-dialog', ['exports', 'ember-paper/components/paper-dialog'], function (exports, _paperDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialog.default;
    }
  });
});
define('todo-front/components/paper-divider', ['exports', 'ember-paper/components/paper-divider'], function (exports, _paperDivider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperDivider.default;
});
define('todo-front/components/paper-form', ['exports', 'ember-paper/components/paper-form'], function (exports, _paperForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperForm.default;
});
define('todo-front/components/paper-grid-list', ['exports', 'ember-paper/components/paper-grid-list'], function (exports, _paperGridList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridList.default;
    }
  });
});
define('todo-front/components/paper-grid-tile-footer', ['exports', 'ember-paper/components/paper-grid-tile-footer'], function (exports, _paperGridTileFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridTileFooter.default;
    }
  });
});
define('todo-front/components/paper-grid-tile', ['exports', 'ember-paper/components/paper-grid-tile'], function (exports, _paperGridTile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridTile.default;
    }
  });
});
define('todo-front/components/paper-icon', ['exports', 'ember-paper/components/paper-icon'], function (exports, _paperIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperIcon.default;
});
define('todo-front/components/paper-ink-bar', ['exports', 'ember-paper/components/paper-ink-bar'], function (exports, _paperInkBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperInkBar.default;
    }
  });
});
define('todo-front/components/paper-input', ['exports', 'ember-paper/components/paper-input'], function (exports, _paperInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperInput.default;
});
define('todo-front/components/paper-item', ['exports', 'ember-paper/components/paper-item'], function (exports, _paperItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperItem.default;
});
define('todo-front/components/paper-list', ['exports', 'ember-paper/components/paper-list'], function (exports, _paperList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperList.default;
});
define('todo-front/components/paper-menu-content-inner', ['exports', 'ember-paper/components/paper-menu-content-inner'], function (exports, _paperMenuContentInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuContentInner.default;
    }
  });
});
define('todo-front/components/paper-menu-content', ['exports', 'ember-paper/components/paper-menu-content'], function (exports, _paperMenuContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuContent.default;
    }
  });
});
define('todo-front/components/paper-menu-item', ['exports', 'ember-paper/components/paper-menu-item'], function (exports, _paperMenuItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuItem.default;
    }
  });
});
define('todo-front/components/paper-menu', ['exports', 'ember-paper/components/paper-menu'], function (exports, _paperMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenu.default;
    }
  });
});
define('todo-front/components/paper-optgroup', ['exports', 'ember-paper/components/paper-optgroup'], function (exports, _paperOptgroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperOptgroup.default;
    }
  });
});
define('todo-front/components/paper-option', ['exports', 'ember-paper/components/paper-option'], function (exports, _paperOption) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperOption.default;
});
define('todo-front/components/paper-progress-circular', ['exports', 'ember-paper/components/paper-progress-circular'], function (exports, _paperProgressCircular) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperProgressCircular.default;
    }
  });
});
define('todo-front/components/paper-progress-linear', ['exports', 'ember-paper/components/paper-progress-linear'], function (exports, _paperProgressLinear) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperProgressLinear.default;
    }
  });
});
define('todo-front/components/paper-radio-group', ['exports', 'ember-paper/components/paper-radio-group'], function (exports, _paperRadioGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioGroup.default;
    }
  });
});
define('todo-front/components/paper-radio-proxiable', ['exports', 'ember-paper/components/paper-radio-proxiable'], function (exports, _paperRadioProxiable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioProxiable.default;
    }
  });
});
define('todo-front/components/paper-radio', ['exports', 'ember-paper/components/paper-radio'], function (exports, _paperRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadio.default;
    }
  });
});
define('todo-front/components/paper-reset-button', ['exports', 'ember-paper/components/paper-reset-button'], function (exports, _paperResetButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperResetButton.default;
    }
  });
});
define('todo-front/components/paper-select-content', ['exports', 'ember-paper/components/paper-select-content'], function (exports, _paperSelectContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectContent.default;
    }
  });
});
define('todo-front/components/paper-select-header', ['exports', 'ember-paper/components/paper-select-header'], function (exports, _paperSelectHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectHeader.default;
    }
  });
});
define('todo-front/components/paper-select-menu-inner', ['exports', 'ember-paper/components/paper-select-menu-inner'], function (exports, _paperSelectMenuInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectMenuInner.default;
    }
  });
});
define('todo-front/components/paper-select-menu-trigger', ['exports', 'ember-paper/components/paper-select-menu-trigger'], function (exports, _paperSelectMenuTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSelectMenuTrigger.default;
});
define('todo-front/components/paper-select-menu', ['exports', 'ember-paper/components/paper-select-menu'], function (exports, _paperSelectMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectMenu.default;
    }
  });
});
define('todo-front/components/paper-select-options', ['exports', 'ember-paper/components/paper-select-options'], function (exports, _paperSelectOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectOptions.default;
    }
  });
});
define('todo-front/components/paper-select-search', ['exports', 'ember-paper/components/paper-select-search'], function (exports, _paperSelectSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectSearch.default;
    }
  });
});
define('todo-front/components/paper-select-trigger', ['exports', 'ember-paper/components/paper-select-trigger'], function (exports, _paperSelectTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectTrigger.default;
    }
  });
});
define('todo-front/components/paper-select', ['exports', 'ember-paper/components/paper-select'], function (exports, _paperSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSelect.default;
});
define('todo-front/components/paper-sidenav-container', ['exports', 'ember-paper/components/paper-sidenav-container'], function (exports, _paperSidenavContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSidenavContainer.default;
    }
  });
});
define('todo-front/components/paper-sidenav-inner', ['exports', 'ember-paper/components/paper-sidenav-inner'], function (exports, _paperSidenavInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenavInner.default;
});
define('todo-front/components/paper-sidenav-toggle', ['exports', 'ember-paper/components/paper-sidenav-toggle'], function (exports, _paperSidenavToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenavToggle.default;
});
define('todo-front/components/paper-sidenav', ['exports', 'ember-paper/components/paper-sidenav'], function (exports, _paperSidenav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenav.default;
});
define('todo-front/components/paper-slider', ['exports', 'ember-paper/components/paper-slider'], function (exports, _paperSlider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSlider.default;
});
define('todo-front/components/paper-snackbar-text', ['exports', 'ember-paper/components/paper-snackbar-text'], function (exports, _paperSnackbarText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSnackbarText.default;
    }
  });
});
define('todo-front/components/paper-subheader', ['exports', 'ember-paper/components/paper-subheader'], function (exports, _paperSubheader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSubheader.default;
});
define('todo-front/components/paper-switch', ['exports', 'ember-paper/components/paper-switch'], function (exports, _paperSwitch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSwitch.default;
});
define('todo-front/components/paper-tab', ['exports', 'ember-paper/components/paper-tab'], function (exports, _paperTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTab.default;
    }
  });
});
define('todo-front/components/paper-tabs', ['exports', 'ember-paper/components/paper-tabs'], function (exports, _paperTabs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTabs.default;
    }
  });
});
define('todo-front/components/paper-toast-inner', ['exports', 'ember-paper/components/paper-toast-inner'], function (exports, _paperToastInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToastInner.default;
    }
  });
});
define('todo-front/components/paper-toast-text', ['exports', 'ember-paper/components/paper-toast-text'], function (exports, _paperToastText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToastText.default;
    }
  });
});
define('todo-front/components/paper-toast', ['exports', 'ember-paper/components/paper-toast'], function (exports, _paperToast) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToast.default;
    }
  });
});
define('todo-front/components/paper-toaster', ['exports', 'ember-paper/components/paper-toaster'], function (exports, _paperToaster) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
define('todo-front/components/paper-toolbar-tools', ['exports', 'ember-paper/components/paper-toolbar-tools'], function (exports, _paperToolbarTools) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperToolbarTools.default;
});
define('todo-front/components/paper-toolbar', ['exports', 'ember-paper/components/paper-toolbar'], function (exports, _paperToolbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperToolbar.default;
});
define('todo-front/components/paper-tooltip-inner', ['exports', 'ember-paper/components/paper-tooltip-inner'], function (exports, _paperTooltipInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTooltipInner.default;
    }
  });
});
define('todo-front/components/paper-tooltip', ['exports', 'ember-paper/components/paper-tooltip'], function (exports, _paperTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTooltip.default;
    }
  });
});
define('todo-front/components/paper-virtual-repeat-scroller', ['exports', 'ember-paper/components/paper-virtual-repeat-scroller'], function (exports, _paperVirtualRepeatScroller) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperVirtualRepeatScroller.default;
});
define('todo-front/components/paper-virtual-repeat', ['exports', 'ember-paper/components/paper-virtual-repeat'], function (exports, _paperVirtualRepeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperVirtualRepeat.default;
});
define('todo-front/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('todo-front/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('todo-front/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('todo-front/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('todo-front/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('todo-front/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('todo-front/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('todo-front/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('todo-front/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('todo-front/components/resize-detector', ['exports', 'ember-element-resize-detector/components/resize-detector'], function (exports, _resizeDetector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _resizeDetector.default;
    }
  });
});
define('todo-front/components/scroll-content-element', ['exports', 'ember-scrollable/components/scroll-content-element'], function (exports, _scrollContentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollContentElement.default;
    }
  });
});
define('todo-front/components/tether-dialog', ['exports', 'ember-modal-dialog/components/deprecated-tether-dialog'], function (exports, _deprecatedTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _deprecatedTetherDialog.default;
    }
  });
});
define('todo-front/components/transition-group', ['exports', 'ember-css-transitions/components/transition-group'], function (exports, _transitionGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _transitionGroup.default;
    }
  });
});
define('todo-front/components/virtual-each', ['exports', 'virtual-each/components/virtual-each/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('todo-front/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('todo-front/controllers/home', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Controller.extend({
    tasks: _ember.default.computed(function () {
      return this.get('store').findAll('task');
    }),

    todoTasks: _ember.default.computed('tasks.length', function () {
      return this.get('tasks').filterBy('status', 'todo');
    }),
    progressTasks: _ember.default.computed('tasks.length', function () {
      return this.get('tasks').filterBy('status', 'progress');
    }),
    doneTasks: _ember.default.computed('tasks.length', function () {
      return this.get('tasks').filterBy('status', 'done');
    }),

    users: _ember.default.computed(function () {
      return this.get('store').findAll('user');
    }),

    tasktypes: _ember.default.computed(function () {
      return this.get('store').findAll('tasktype');
    }),

    isShowingModal: false,

    actions: {
      deleteTask: function deleteTask(taskid) {
        var store = this.get('store');
        store.findRecord('task', taskid, { backgroundReload: false }).then(function (task) {
          task.destroyRecord();
        });
      },
      addTask: function addTask(taskDescription, userId, tasktypeId) {
        var store = this.get('store');
        var u = this.store.createRecord('task', {
          description: taskDescription,
          status: "todo",
          user: this.store.peekRecord('user', userId),
          tasktype: this.store.peekRecord('tasktype', tasktypeId)
        });
        u.save();
      },
      updateTask: function updateTask() {
        this.store.find('task', 19).then(function (record) {
          record.set('status', 'progress');
          record.save();
        });
      },


      toggleModal: function toggleModal() {
        this.toggleProperty('isShowingModal');
      }

    }
  });
});
define('todo-front/helpers/-paper-underscore', ['exports', 'ember-paper/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
define('todo-front/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_and.andHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('todo-front/helpers/app-version', ['exports', 'ember', 'todo-front/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('todo-front/helpers/cancel-all', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cancelHelper = cancelHelper;


  var CANCEL_REASON = "the 'cancel-all' template helper was invoked";

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      _ember.default.assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _helpers.taskHelperClosure)('cancelAll', [cancelable, CANCEL_REASON]);
  }

  exports.default = _ember.default.Helper.helper(cancelHelper);
});
define('todo-front/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('todo-front/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('todo-front/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('todo-front/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_equal.equalHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('todo-front/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_gt.gtHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('todo-front/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_gte.gteHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('todo-front/helpers/ignore-children', ['exports', 'ember-ignore-children-helper/helpers/ignore-children'], function (exports, _ignoreChildren) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(exports, 'ignoreChildren', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
define('todo-front/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_isArray.isArrayHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('todo-front/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('todo-front/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_lt.ltHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('todo-front/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_lte.lteHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('todo-front/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_notEqual.notEqualHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('todo-front/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_not.notHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('todo-front/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_or.orHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('todo-front/helpers/perform', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.performHelper = performHelper;
  function performHelper(args, hash) {
    return (0, _helpers.taskHelperClosure)('perform', args, hash);
  }

  exports.default = _ember.default.Helper.helper(performHelper);
});
define('todo-front/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('todo-front/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('todo-front/helpers/task', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref),
        task = _ref2[0],
        args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports.default = _ember.default.Helper.helper(taskHelper);
});
define('todo-front/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_xor.xorHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('todo-front/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _addModalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
});
define('todo-front/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'todo-front/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('todo-front/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('todo-front/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('todo-front/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
define('todo-front/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('todo-front/initializers/export-application-global', ['exports', 'ember', 'todo-front/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('todo-front/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('todo-front/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('todo-front/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('todo-front/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember.default.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("todo-front/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('todo-front/mixins/transition-mixin', ['exports', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _transitionMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _transitionMixin.default;
    }
  });
});
define('todo-front/models/task', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    description: _emberData.default.attr(),
    status: _emberData.default.attr(),
    user: _emberData.default.belongsTo('user'),
    tasktype: _emberData.default.belongsTo('tasktype')
  });
});
define('todo-front/models/tasktype', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr(),
    tasks: _emberData.default.hasMany('task')
  });
});
define('todo-front/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr(),
    tasks: _emberData.default.hasMany('task')
  });
});
define('todo-front/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('todo-front/router', ['exports', 'ember', 'todo-front/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('home');
    this.route('settings');
  });

  exports.default = Router;
});
define('todo-front/routes/home', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    // model(){
    //   return this.get('store').findAll('task');
    // }
  });
});
define('todo-front/routes/index', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    beforeModel: function beforeModel() {
      this.transitionTo('home');
    }
  });
});
define('todo-front/routes/settings', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('todo-front/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('todo-front/services/constants', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Service = _ember.default.Service,
      inject = _ember.default.inject,
      computed = _ember.default.computed,
      EObject = _ember.default.Object;
  exports.default = Service.extend({

    sniffer: inject.service('sniffer'),

    webkit: computed(function () {
      return (/webkit/i.test(this.get('sniffer.vendorPrefix'))
      );
    }),

    vendorProperty: function vendorProperty(name) {
      var prefix = this.get('sniffer.vendorPrefix').toLowerCase();
      return this.get('webkit') ? '-webkit-' + name.charAt(0) + name.substring(1) : name;
    },


    CSS: computed('webkit', function () {
      var webkit = this.get('webkit');
      return {
        /* Constants */
        TRANSITIONEND: 'transitionend' + (webkit ? ' webkitTransitionEnd' : ''),
        ANIMATIONEND: 'animationend' + (webkit ? ' webkitAnimationEnd' : ''),

        TRANSFORM: this.vendorProperty('transform'),
        TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
        TRANSITION: this.vendorProperty('transition'),
        TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
        ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
        ANIMATION_DURATION: this.vendorProperty('animationDuration'),
        ANIMATION_NAME: this.vendorProperty('animationName'),
        ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
        ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
      };
    }),

    KEYCODE: EObject.create({
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      TAB: 9
    }),

    MEDIA: {
      'xs': '(max-width: 599px)',
      'gt-xs': '(min-width: 600px)',
      'sm': '(min-width: 600px) and (max-width: 959px)',
      'gt-sm': '(min-width: 960px)',
      'md': '(min-width: 960px) and (max-width: 1279px)',
      'gt-md': '(min-width: 1280px)',
      'lg': '(min-width: 1280px) and (max-width: 1919px)',
      'gt-lg': '(min-width: 1920px)',
      'xl': '(min-width: 1920px)',
      'print': 'print'
    },

    MEDIA_PRIORITY: ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs', 'print']
  });
});
define('todo-front/services/modal-dialog', ['exports', 'ember', 'todo-front/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      Service = _ember.default.Service;


  function computedFromConfig(prop) {
    return computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  exports.default = Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: computed(function () {
      /*
        everywhere except test, this property will be overwritten
        by the initializer that appends the modal container div
        to the DOM. because initializers don't run in unit/integration
        tests, this is a nice fallback.
      */
      if (_environment.default.environment === 'test') {
        return 'ember-testing';
      }
    })
  });
});
define('todo-front/services/paper-sidenav', ['exports', 'ember-paper/services/paper-sidenav'], function (exports, _paperSidenav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSidenav.default;
    }
  });
});
define('todo-front/services/paper-toaster', ['exports', 'ember-paper/services/paper-toaster'], function (exports, _paperToaster) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
define('todo-front/services/resize-detector', ['exports', 'ember-element-resize-detector/services/resize-detector'], function (exports, _resizeDetector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _resizeDetector.default;
    }
  });
});
define('todo-front/services/scrollbar-thickness', ['exports', 'ember-scrollable/services/scrollbar-thickness'], function (exports, _scrollbarThickness) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollbarThickness.default;
    }
  });
});
define('todo-front/services/sniffer', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Service = _ember.default.Service,
      computed = _ember.default.computed;


  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var lowercase = function lowercase(string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  var toInt = function toInt(str) {
    return parseInt(str, 10);
  };

  exports.default = Service.extend({
    vendorPrefix: '',
    transitions: false,
    animations: false,
    _document: null,
    _window: null,

    android: computed('', function () {
      return toInt((/android (\d+)/.exec(lowercase((this.get('_window').navigator || {}).userAgent)) || [])[1]);
    }),

    init: function init() {
      this._super.apply(this, arguments);
      if (typeof FastBoot !== 'undefined') {
        return;
      }

      var _document = document;
      var _window = window;

      this.setProperties({
        _document: _document,
        _window: _window
      });

      var bodyStyle = _document.body && _document.body.style;
      var vendorPrefix = void 0;
      var vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;

      var transitions = false;
      var animations = false;
      var match = void 0;

      if (bodyStyle) {
        for (var prop in bodyStyle) {
          if (match = vendorRegex.exec(prop)) {
            vendorPrefix = match[0];
            vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
            break;
          }
        }

        if (!vendorPrefix) {
          vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
        }

        transitions = !!('transition' in bodyStyle || vendorPrefix + 'Transition' in bodyStyle);
        animations = !!('animation' in bodyStyle || vendorPrefix + 'Animation' in bodyStyle);

        if (this.get('android') && (!transitions || !animations)) {
          transitions = isString(bodyStyle.webkitTransition);
          animations = isString(bodyStyle.webkitAnimation);
        }
      }

      this.set('transitions', transitions);
      this.set('animations', animations);

      this.set('vendorPrefix', vendorPrefix);
    }
  });
});
define('todo-front/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define('todo-front/services/util', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Service = _ember.default.Service,
      $ = _ember.default.$;


  var Util = Service.extend({
    disableScrollAround: function disableScrollAround(element) {
      var util = this;
      var $document = $(window.document);

      util.disableScrollAround._count = util.disableScrollAround._count || 0;
      ++util.disableScrollAround._count;
      if (util.disableScrollAround._enableScrolling) {
        return util.disableScrollAround._enableScrolling;
      }

      var _$document$get = $document.get(0),
          body = _$document$get.body;

      var restoreBody = disableBodyScroll();
      var restoreElement = disableElementScroll();

      return util.disableScrollAround._enableScrolling = function () {
        if (! --util.disableScrollAround._count) {
          restoreBody();
          restoreElement();
          delete util.disableScrollAround._enableScrolling;
        }
      };

      // Creates a virtual scrolling mask to absorb touchmove, keyboard, scrollbar clicking, and wheel events
      function disableElementScroll() {
        var zIndex = 50;
        var scrollMask = $('<div class="md-scroll-mask" style="z-index: ' + zIndex + '">\n          <div class="md-scroll-mask-bar"></div>\n        </div>');
        body.appendChild(scrollMask[0]);

        scrollMask.on('wheel', preventDefault);
        scrollMask.on('touchmove', preventDefault);
        $document.on('keydown', disableKeyNav);

        return function restoreScroll() {
          scrollMask.off('wheel');
          scrollMask.off('touchmove');
          scrollMask[0].parentNode.removeChild(scrollMask[0]);
          $document.off('keydown', disableKeyNav);
          delete util.disableScrollAround._enableScrolling;
        };

        // Prevent keypresses from elements inside the body
        // used to stop the keypresses that could cause the page to scroll
        // (arrow keys, spacebar, tab, etc).
        function disableKeyNav(e) {
          // -- temporarily removed this logic, will possibly re-add at a later date
          return;
          if (!element[0].contains(e.target)) {
            e.preventDefault();
            e.stopImmediatePropagation();
          }
        }

        function preventDefault(e) {
          e.preventDefault();
        }
      }

      // Converts the body to a position fixed block and translate it to the proper scroll
      // position
      function disableBodyScroll() {
        var htmlNode = body.parentNode;
        var restoreHtmlStyle = htmlNode.getAttribute('style') || '';
        var restoreBodyStyle = body.getAttribute('style') || '';
        var scrollOffset = body.scrollTop + body.parentElement.scrollTop;
        var clientWidth = body.clientWidth;


        if (body.scrollHeight > body.clientHeight) {
          applyStyles(body, {
            position: 'fixed',
            width: '100%',
            top: -scrollOffset + 'px'
          });

          applyStyles(htmlNode, {
            overflowY: 'scroll'
          });
        }

        if (body.clientWidth < clientWidth) {
          applyStyles(body, { overflow: 'hidden' });
        }

        return function restoreScroll() {
          body.setAttribute('style', restoreBodyStyle);
          htmlNode.setAttribute('style', restoreHtmlStyle);
          body.scrollTop = scrollOffset;
        };
      }

      function applyStyles(el, styles) {
        for (var key in styles) {
          el.style[key] = styles[key];
        }
      }
    },
    enableScrolling: function enableScrolling() {
      var method = this.disableScrollAround._enableScrolling;
      method && method();
    },
    supplant: function supplant(template, values, pattern) {
      pattern = pattern || /\{([^\{\}]*)\}/g;
      return template.replace(pattern, function (a, b) {
        var p = b.split('.');
        var r = values;
        try {
          for (var s in p) {
            if (p.hasOwnProperty(s)) {
              r = r[p[s]];
            }
          }
        } catch (e) {
          r = a;
        }
        return typeof r === 'string' || typeof r === 'number' ? r : a;
      });
    },

    nextTick: function (window, prefixes, i, p, fnc) {
      while (!fnc && i < prefixes.length) {
        fnc = window[prefixes[i++] + 'equestAnimationFrame'];
      }
      return fnc && fnc.bind(window) || window.setImmediate || function (fnc) {
        window.setTimeout(fnc, 0);
      };
    }(window, 'r webkitR mozR msR oR'.split(' '), 0)

  });

  exports.default = Util;
});
define("todo-front/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Rd+IQENw", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "todo-front/templates/application.hbs" } });
});
define("todo-front/templates/components/transition-group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3MZkGYx1", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "todo-front/templates/components/transition-group.hbs" } });
});
define("todo-front/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FKikHXaw", "block": "{\"statements\":[[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"layout-row layout-align-center center-list\"],[13],[0,\"\\n\"],[6,[\"paper-card\"],null,null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"layout-row layout-align-center-center\"],[13],[0,\"\\n        \"],[11,\"h2\",[]],[13],[0,\"Todo\"],[14],[0,\"\\n        \"],[6,[\"paper-button\"],null,[[\"onClick\",\"iconButton\"],[[33,[\"action\"],[[28,[null]],\"toggleModal\"],null],true]],{\"statements\":[[1,[33,[\"paper-icon\"],[\"add\"],[[\"size\"],[24]]],false]],\"locals\":[]},null],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"card-size scrollable\"],[13],[0,\"\\n\"],[6,[\"paper-list\"],null,null,{\"statements\":[[6,[\"each\"],[[28,[\"todoTasks\"]]],null,{\"statements\":[[6,[\"paper-item\"],null,[[\"class\"],[\"md-3-line\"]],{\"statements\":[[0,\"                \"],[11,\"div\",[]],[15,\"class\",\"md-list-item-text\"],[13],[0,\"\\n                  \"],[11,\"h3\",[]],[13],[1,[28,[\"task\",\"id\"]],false],[0,\"-\"],[1,[28,[\"task\",\"description\"]],false],[14],[0,\"\\n                  \"],[11,\"p\",[]],[13],[0,\"Type: \"],[1,[28,[\"task\",\"tasktype\",\"name\"]],false],[14],[0,\"\\n                  \"],[11,\"h4\",[]],[13],[0,\"Assigned to: \"],[1,[28,[\"task\",\"user\",\"name\"]],false],[14],[0,\"\\n                \"],[14],[0,\"\\n                \"],[1,[26,[\"paper-divider\"]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"task\"]},null]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\"]],\"locals\":[\"card\"]},null],[0,\"\\n\"],[6,[\"paper-card\"],null,null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"layout-row layout-align-center-center\"],[13],[0,\"\\n        \"],[11,\"h2\",[]],[13],[0,\"Progress\"],[14],[0,\"\\n        \"],[6,[\"paper-button\"],null,[[\"onClick\",\"iconButton\"],[[33,[\"action\"],[[28,[null]],\"updateTask\"],null],true]],{\"statements\":[[1,[33,[\"paper-icon\"],[\"update\"],[[\"size\"],[24]]],false]],\"locals\":[]},null],[0,\"\\n\\n      \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"card-size scrollable\"],[13],[0,\"\\n\"],[6,[\"paper-list\"],null,null,{\"statements\":[[6,[\"each\"],[[28,[\"progressTasks\"]]],null,{\"statements\":[[6,[\"paper-item\"],null,[[\"class\"],[\"md-3-line\"]],{\"statements\":[[0,\"              \"],[11,\"div\",[]],[15,\"class\",\"md-list-item-text\"],[13],[0,\"\\n                \"],[11,\"h3\",[]],[13],[1,[28,[\"task\",\"id\"]],false],[0,\"-\"],[1,[28,[\"task\",\"description\"]],false],[14],[0,\"\\n                \"],[11,\"p\",[]],[13],[0,\"Type: \"],[1,[28,[\"task\",\"tasktype\",\"name\"]],false],[14],[0,\"\\n                \"],[11,\"h4\",[]],[13],[0,\"Assigned to: \"],[1,[28,[\"task\",\"user\",\"name\"]],false],[14],[0,\"\\n              \"],[14],[0,\"\\n              \"],[1,[26,[\"paper-divider\"]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"task\"]},null]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\"]],\"locals\":[\"card\"]},null],[0,\"\\n\"],[6,[\"paper-card\"],null,null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"layout-row layout-align-center-center\"],[13],[0,\"\\n        \"],[11,\"h2\",[]],[13],[0,\"Done\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"card-size scrollable\"],[13],[0,\"\\n\"],[6,[\"paper-list\"],null,null,{\"statements\":[[6,[\"each\"],[[28,[\"doneTasks\"]]],null,{\"statements\":[[6,[\"paper-item\"],null,[[\"class\"],[\"md-3-line\"]],{\"statements\":[[0,\"                \"],[11,\"div\",[]],[15,\"class\",\"md-list-item-text\"],[13],[0,\"\\n                  \"],[11,\"h3\",[]],[13],[1,[28,[\"task\",\"id\"]],false],[0,\"-\"],[1,[28,[\"task\",\"description\"]],false],[14],[0,\"\\n                  \"],[11,\"p\",[]],[13],[0,\"Type: \"],[1,[28,[\"task\",\"tasktype\",\"name\"]],false],[14],[0,\"\\n                  \"],[11,\"h4\",[]],[13],[0,\"Assigned to: \"],[1,[28,[\"task\",\"user\",\"name\"]],false],[14],[0,\"\\n                \"],[14],[0,\"\\n                \"],[1,[26,[\"paper-divider\"]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"task\"]},null]],\"locals\":[]},null],[0,\"      \"],[14],[0,\"\\n\"]],\"locals\":[\"card\"]},null],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"isShowingModal\"]]],null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"layout-row layout-align-center\"],[13],[0,\"\\n\"],[6,[\"modal-dialog\"],null,[[\"onClose\",\"targetAttachment\",\"translucentOverlay\"],[\"toggleModal\",\"center\",true]],{\"statements\":[[0,\"\\n\"],[6,[\"paper-form\"],null,null,{\"statements\":[[0,\"              \"],[11,\"div\",[]],[15,\"class\",\"layout-column\"],[13],[0,\"\\n\\n                \"],[1,[33,[\"component\"],[[28,[\"form\",\"input\"]]],[[\"label\",\"value\",\"onChange\",\"required\"],[\"Description\",[28,[\"taskDescription\"]],[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"taskDescription\"]]],null]],null],true]]],false],[0,\"\\n\\n\"],[6,[\"component\"],[[28,[\"form\",\"select\"]]],[[\"placeholder\",\"selected\",\"options\",\"onChange\"],[\"Assign to a user\",[28,[\"selectedUser\"]],[28,[\"users\"]],[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"selectedUser\"]]],null]],null]]],{\"statements\":[[0,\"                  \"],[1,[28,[\"user\",\"name\"]],false],[0,\"\\n\"]],\"locals\":[\"user\"]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"form\",\"select\"]]],[[\"placeholder\",\"selected\",\"options\",\"onChange\"],[\"Type of Tasks\",[28,[\"selectedTaskType\"]],[28,[\"tasktypes\"]],[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"selectedTaskType\"]]],null]],null]]],{\"statements\":[[0,\"                  \"],[1,[28,[\"tasktype\",\"name\"]],false],[0,\"\\n\"]],\"locals\":[\"tasktype\"]},null],[0,\"\\n              \"],[14],[0,\"\\n\\n              \"],[6,[\"paper-button\"],null,[[\"onClick\"],[[33,[\"action\"],[[28,[null]],\"addTask\",[28,[\"taskDescription\"]],[28,[\"selectedUser\",\"id\"]],[28,[\"selectedTaskType\",\"id\"]]],null]]],{\"statements\":[[0,\"Create Task\"]],\"locals\":[]},null],[0,\"\\n              \"],[6,[\"paper-button\"],null,[[\"onClick\"],[[33,[\"action\"],[[28,[null]],\"toggleModal\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"locals\":[]},null],[0,\"\\n\\n\\n\"]],\"locals\":[\"form\"]},null]],\"locals\":[]},null],[0,\"      \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "todo-front/templates/home.hbs" } });
});
define("todo-front/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RpDEnS3G", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "todo-front/templates/index.hbs" } });
});
define("todo-front/templates/settings", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tHa+NU97", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "todo-front/templates/settings.hbs" } });
});
define('todo-front/utils/clamp', ['exports', 'ember-paper/utils/clamp'], function (exports, _clamp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clamp.default;
    }
  });
});


define('todo-front/config/environment', ['ember'], function(Ember) {
  var prefix = 'todo-front';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("todo-front/app")["default"].create({"name":"todo-front","version":"0.0.0+a1684f2e"});
}
//# sourceMappingURL=todo-front.map
