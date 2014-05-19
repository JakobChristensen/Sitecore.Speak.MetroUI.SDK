var MetroSelect = (function () {
    function MetroSelect() {
    }
    // #endregion
    MetroSelect.prototype.initialize = function (initial, app, el, sitecore) {
        var _this = this;
        _.each($(el).children().first().children(), function (e) {
            _this.Items.push({ DisplayName: $(e).text().trim(), Value: $(e).attr("value").trim() });
        });
    };
    return MetroSelect;
})();

Sitecore.component(["jquery", "underscore"], MetroSelect, "MetroSelect");
