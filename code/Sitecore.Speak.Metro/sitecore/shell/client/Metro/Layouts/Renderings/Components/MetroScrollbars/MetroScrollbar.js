var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak"], function(require, exports, Speak) {
    var MetroScrollbar = (function (_super) {
        __extends(MetroScrollbar, _super);
        function MetroScrollbar() {
            _super.apply(this, arguments);
        }
        return MetroScrollbar;
    })(Speak.ControlBase);

    Sitecore.component(["metro"], MetroScrollbar, "MetroScrollbar");
});
