var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak"], function(require, exports, Speak) {
    var MetroCarousel = (function (_super) {
        __extends(MetroCarousel, _super);
        function MetroCarousel() {
            _super.apply(this, arguments);
        }
        MetroCarousel.prototype.initialized = function () {
            var markers = {
                type: this.Type.toLowerCase(),
                show: this.Show,
                position: this.Position
            };

            switch (this.Position.toLowerCase()) {
                case "bottomleft":
                    markers.position = "bottom-left";
                    break;
                case "bottomcenter":
                    markers.position = "bottom-center";
                    break;
                case "bottomright":
                    markers.position = "bottom-right";
                    break;
                case "topleft":
                    markers.position = "top-left";
                    break;
                case "topcenter":
                    markers.position = "top-center";
                    break;
                case "topright":
                    markers.position = "top-right";
                    break;
            }

            this.control = $(this.el).carousel({
                auto: this.Auto,
                period: !this.Period ? 2000 : this.Period,
                duration: !this.Duration ? 500 : this.Duration,
                effect: this.Effect.toLowerCase(),
                direction: !this.Direction ? "left" : this.Direction,
                stop: this.Stop,
                controls: this.Controls,
                width: !this.Width ? "100%" : this.Width,
                height: !this.Height ? "300px" : this.Height,
                markers: markers
            });
        };
        return MetroCarousel;
    })(Speak.ControlBase);

    Sitecore.Speak.component(["metro"], MetroCarousel, "MetroCarousel");
});
