import Speak = require("sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak");

class MetroSlider extends Speak.ControlBase {
  // #region Public Properties
  public Accurary: number;
  public Animate: boolean;
  public Color: string;
  public CompleteColor: string;
  public IsVisible: boolean;
  public MarkerColor: string;
  public Max: number;
  public Min: number;
  public Orientation: string;
  public Position: number;
  public ShowHint: boolean;
  public Tooltip: string;         
  // #endregion

  private control: any;

  initialized() {
    this.control = (<any>$(this.el)).slider({
      changed: (value) => this.changed(value)
    });                   

	  this.on("change:Position", this.update, this);
  }

  private update() {
    this.control.slider("value", this.Position);
  }

  private changed(value) {
    this.Position = value;
  }
}

Sitecore.Speak.component(["metro"], MetroSlider, "MetroSlider");
