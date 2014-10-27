var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak"], function(require, exports, Speak) {
    var MetroMenu = (function (_super) {
        __extends(MetroMenu, _super);
        function MetroMenu() {
            _super.apply(this, arguments);
        }
        // #endregion
        MetroMenu.prototype.initialized = function () {
        };
        return MetroMenu;
    })(Speak.ControlBase);

    Sitecore.Speak.component(["metro"], MetroMenu, "MetroMenu");
});
