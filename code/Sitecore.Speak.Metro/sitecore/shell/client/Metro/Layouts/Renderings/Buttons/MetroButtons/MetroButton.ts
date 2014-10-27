import Speak = require("sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak");

class MetroButton extends Speak.ControlBase {

  // #region Public Properties
  public IsBlock: boolean;
  public IsEnabled: boolean;
  public IsVisible: boolean;
  public Size: string;
  public Text: string;
  public Tooltip: string;
  public Type: string;
  // #endregion

  click() {
    var click = $(this.el).data("sc-click");
    if (click) {
      Sitecore.Speak.Events.handleEvent(click, this);
    }
  }               
}

Sitecore.Speak.component(["metro"], MetroButton, "MetroButton");
