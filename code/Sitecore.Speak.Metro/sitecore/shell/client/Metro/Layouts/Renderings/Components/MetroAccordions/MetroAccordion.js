var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak"], function(require, exports, Speak) {
    var MetroAccordion = (function (_super) {
        __extends(MetroAccordion, _super);
        function MetroAccordion() {
            _super.apply(this, arguments);
        }
        return MetroAccordion;
    })(Speak.ControlBase);

    Sitecore.Speak.component(["metro"], MetroAccordion, "MetroAccordion");
});
