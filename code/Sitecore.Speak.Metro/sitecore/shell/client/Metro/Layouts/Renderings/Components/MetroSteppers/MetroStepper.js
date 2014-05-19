var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak"], function(require, exports, Speak) {
    var MetroStepper = (function (_super) {
        __extends(MetroStepper, _super);
        function MetroStepper() {
            _super.apply(this, arguments);
        }
        MetroStepper.prototype.initialized = function () {
            this.control = $(this.el);
            var id = $(this.el).data("sc-id");

            this.app.on(id + ":next", this.next, this);
            this.app.on(id + ":previous", this.previous, this);
            this.app.on(id + ":last", this.last, this);
            this.app.on(id + ":first", this.first, this);
        };

        MetroStepper.prototype.next = function () {
            this.control.stepper("next");
        };

        MetroStepper.prototype.previous = function () {
            this.control.stepper("prior");
        };

        MetroStepper.prototype.first = function () {
            this.control.stepper("first");
        };

        MetroStepper.prototype.last = function () {
            this.control.stepper("last");
        };
        return MetroStepper;
    })(Speak.ControlBase);

    Sitecore.component(["metro"], MetroStepper, "MetroStepper");
});
