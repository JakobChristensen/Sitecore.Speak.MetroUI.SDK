var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak"], function(require, exports, Speak) {
    var MetroShortcut = (function (_super) {
        __extends(MetroShortcut, _super);
        function MetroShortcut() {
            _super.apply(this, arguments);
        }
        // #endregion
        MetroShortcut.prototype.click = function () {
            var click = $(this.el).data("sc-click");
            if (click) {
                Sitecore.Events.handleEvent(click, this);
            }
        };
        return MetroShortcut;
    })(Speak.ControlBase);

    Sitecore.component(MetroShortcut, "MetroShortcut");
});
