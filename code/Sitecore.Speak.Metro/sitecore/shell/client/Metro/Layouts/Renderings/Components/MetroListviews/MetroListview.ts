import Speak = require("sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak");

class MetroListview extends Speak.ControlBase {
  // #region Public Properties
  public IsVisible: boolean;
  public Selected: string;
  public Tooltip: string;
  // #endregion
}

Sitecore.Speak.component(["metro"], MetroListview, "MetroListview");
