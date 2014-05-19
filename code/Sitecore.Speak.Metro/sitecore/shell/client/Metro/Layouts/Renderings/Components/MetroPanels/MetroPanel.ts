import Speak = require("sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak");

class MetroPanel extends Speak.ControlBase {
  // #region Public Properties
  public IsVisible: boolean;
  public Text: string;
  public Tooltip: string;
  // #endregion
}

Sitecore.component(["metro"], MetroPanel, "MetroPanel");
