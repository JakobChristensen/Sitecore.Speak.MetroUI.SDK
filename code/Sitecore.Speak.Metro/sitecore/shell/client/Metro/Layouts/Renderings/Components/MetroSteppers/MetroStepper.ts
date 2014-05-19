import Speak = require("sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak");

class MetroStepper extends Speak.ControlBase {
  // #region Public Properties
  public IsVisible: boolean;
  public Tooltip: string;
  // #endregion

  private control: any;

  initialized() {
    this.control = $(this.el);
    var id = $(this.el).data("sc-id");

    this.app.on(id + ":next", this.next, this);
    this.app.on(id + ":previous", this.previous, this);
    this.app.on(id + ":last", this.last, this);
    this.app.on(id + ":first", this.first, this);
  }

  next() {
    this.control.stepper("next");
  }

  previous() {
    this.control.stepper("prior");
  }

  first() {
    this.control.stepper("first");
  }

  last() {
    this.control.stepper("last");
  }
}

Sitecore.component(["metro"], MetroStepper, "MetroStepper");
