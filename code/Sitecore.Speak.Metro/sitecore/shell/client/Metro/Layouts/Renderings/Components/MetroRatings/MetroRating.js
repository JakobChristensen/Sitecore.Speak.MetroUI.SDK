var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak"], function(require, exports, Speak) {
    var MetroRating = (function (_super) {
        __extends(MetroRating, _super);
        function MetroRating() {
            _super.apply(this, arguments);
        }
        MetroRating.prototype.initialized = function () {
            var _this = this;
            this.control = $(this.el).rating({
                score: this.Score,
                stars: this.Stars,
                showScore: this.ShowScore,
                scoreHint: this.Text,
                click: function (value, rating) {
                    return _this.clicked(value, rating);
                }
            });

            this.on("change:Score", this.update, this);
        };

        MetroRating.prototype.update = function () {
            this.control.rating("rate", this.Score);
        };

        MetroRating.prototype.clicked = function (value, rating) {
            this.Score = value;
        };
        return MetroRating;
    })(Speak.ControlBase);

    Sitecore.Speak.component(["metro"], MetroRating, "MetroRating");
});
