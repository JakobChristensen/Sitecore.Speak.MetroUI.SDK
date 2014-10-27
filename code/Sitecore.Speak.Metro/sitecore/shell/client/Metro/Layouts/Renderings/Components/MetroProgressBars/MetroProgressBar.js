var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak"], function(require, exports, Speak) {
    var MetroProgressBar = (function (_super) {
        __extends(MetroProgressBar, _super);
        function MetroProgressBar() {
            _super.apply(this, arguments);
        }
        MetroProgressBar.prototype.initialized = function () {
            var _this = this;
            this.control = $(this.el).progressbar({
                value: this.Value,
                color: "bg-" + this.Foreground,
                onchange: function (value) {
                    return _this.changed(value);
                }
            });

            this.on("change:Value", this.update, this);
        };

        MetroProgressBar.prototype.update = function (value) {
            this.control.progressbar("value", this.Value);
        };

        MetroProgressBar.prototype.changed = function (value) {
            this.Value = value;
        };
        return MetroProgressBar;
    })(Speak.ControlBase);

    Sitecore.Speak.component(["metro"], MetroProgressBar, "MetroProgressBar");
});
