var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak"], function(require, exports, Speak) {
    var MetroNavigationBar = (function (_super) {
        __extends(MetroNavigationBar, _super);
        function MetroNavigationBar() {
            _super.apply(this, arguments);
        }
        return MetroNavigationBar;
    })(Speak.ControlBase);

    Sitecore.Speak.component(["metro"], MetroNavigationBar, "MetroNavigationBar");
});
