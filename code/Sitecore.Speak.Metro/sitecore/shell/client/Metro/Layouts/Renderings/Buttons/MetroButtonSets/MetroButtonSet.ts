﻿import Speak = require("sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak");

class MetroButtonSet extends Speak.ControlBase {
  // #region Public Properties
  // This region was generated by a tool. Changes to this region may cause incorrect behavior and will be lost if the code is regenerated.
  public IsVisible: boolean;
  public Tooltip: string;
  // #endregion

  initialize(options: ComponentOptions, app: Application, el: Element, sitecore: SitecoreSpeak) {
  }
}

Sitecore.Speak.component(["metro"], MetroButtonSet, "MetroButtonSet");
