var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak"], function(require, exports, Speak) {
    var MetroButton = (function (_super) {
        __extends(MetroButton, _super);
        function MetroButton() {
            _super.apply(this, arguments);
        }
        // #endregion
        MetroButton.prototype.click = function () {
            var click = $(this.el).data("sc-click");
            if (click) {
                Sitecore.Speak.Events.handleEvent(click, this);
            }
        };
        return MetroButton;
    })(Speak.ControlBase);

    Sitecore.Speak.component(["metro"], MetroButton, "MetroButton");
});
