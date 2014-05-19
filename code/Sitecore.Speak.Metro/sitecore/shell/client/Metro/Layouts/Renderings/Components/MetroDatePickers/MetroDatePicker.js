﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak"], function(require, exports, Speak) {
    var MetroDatePicker = (function (_super) {
        __extends(MetroDatePicker, _super);
        function MetroDatePicker() {
            _super.apply(this, arguments);
        }
        MetroDatePicker.prototype.initialized = function () {
            var date = new Date();
            if (this.Date) {
                date = new Date(this.Date);
            }

            this.control = $(this.el).datepicker({
                format: this.Format || "yyyy-mm-dd",
                multiSelect: this.MultiSelect,
                startMode: (this.StartMode || "day").toLowerCase(),
                date: date,
                locale: this.Locale || "en",
                otherDays: this.OtherDays,
                weekStart: this.WeekStart
            });
        };
        return MetroDatePicker;
    })(Speak.ControlBase);

    Sitecore.component(["metro"], MetroDatePicker, "MetroDatePicker");
});
