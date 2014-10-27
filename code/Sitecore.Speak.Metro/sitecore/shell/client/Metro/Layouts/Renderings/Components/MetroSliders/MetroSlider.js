var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak"], function(require, exports, Speak) {
    var MetroSlider = (function (_super) {
        __extends(MetroSlider, _super);
        function MetroSlider() {
            _super.apply(this, arguments);
        }
        MetroSlider.prototype.initialized = function () {
            var _this = this;
            this.control = $(this.el).slider({
                changed: function (value) {
                    return _this.changed(value);
                }
            });

            this.on("change:Position", this.update, this);
        };

        MetroSlider.prototype.update = function () {
            this.control.slider("value", this.Position);
        };

        MetroSlider.prototype.changed = function (value) {
            this.Position = value;
        };
        return MetroSlider;
    })(Speak.ControlBase);

    Sitecore.Speak.component(["metro"], MetroSlider, "MetroSlider");
});
