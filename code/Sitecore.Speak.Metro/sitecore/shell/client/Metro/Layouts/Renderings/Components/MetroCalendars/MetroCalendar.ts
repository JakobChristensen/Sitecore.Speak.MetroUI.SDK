import Speak = require("sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak");

class MetroCalendar extends Speak.ControlBase {
  // #region Public Properties
  public Date: string;
  public Format: string;
  public IsVisible: boolean;
  public Locale: string;
  public MultiSelect: boolean;
  public OtherDays: boolean;
  public StartMode: string;
  public Tooltip: string;
  public WeekStart: number;
  // #endregion

  private control: any;

  initialized() {
    var date = new Date();
    if (this.Date) {
      date = new Date(this.Date);
    }

    this.control = (<any>$(this.el)).calendar({
      format: this.Format || "yyyy-mm-dd",
      multiSelect: this.MultiSelect,
      startMode: (this.StartMode || "day").toLowerCase(),
      date: date,
      locale: this.Locale || "en",
      otherDays: this.OtherDays,
      weekStart: this.WeekStart
    });
  }
}

Sitecore.component(["metro"], MetroCalendar, "MetroCalendar");
