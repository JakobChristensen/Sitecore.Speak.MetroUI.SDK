// --------------------------------------------------------------------------------------------------------------------
// <copyright file="MetroApplication.cs" company="">
//   
// </copyright>
// <summary>
//   The bootstrap application.
// </summary>
// --------------------------------------------------------------------------------------------------------------------
namespace Sitecore.Metro
{
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Web;
  using System.Web.Mvc;

  using Sitecore.Data;
  using Sitecore.Data.Items;
  using Sitecore.Diagnostics;
  using Sitecore.Mvc.Presentation;
  using Sitecore.Resources;
  using Sitecore.Web.UI;

  /// <summary>The bootstrap application.</summary>
  public class MetroApplication
  {
    #region Static Fields

    /// <summary>
    /// The application
    /// </summary>
    public static readonly ID Application = new ID("{CDBABC25-ED1E-4138-895A-C0416370F1E0}");

    /// <summary>
    /// The button
    /// </summary>
    public static readonly ID Button = new ID("{95D6951C-C12D-4B81-A702-2981601D3289}");

    /// <summary>
    /// The drop down menu
    /// </summary>
    public static readonly ID DropDownMenu = new ID("{7D2D1231-699F-46EB-BFA6-3B854053DB8F}");

    /// <summary>
    /// The drop tile group
    /// </summary>
    public static readonly ID TileGroup = new ID("{016D4799-D6B3-4F89-9763-636FD1C7D593}");

    /// <summary>
    /// The link
    /// </summary>
    public static readonly ID Link = new ID("{8FF9A25C-3228-4DA3-9039-5EB31364D7C2}");

    /// <summary>
    /// The separator
    /// </summary>
    public static readonly ID Separator = new ID("{57266F82-727B-46CD-A4F2-6A08B183C50C}");

    /// <summary>
    /// The header
    /// </summary>
    public static readonly ID Header = new ID("{6A540BD2-CC6B-40C9-9A26-FF5E82E28DE4}");

    /// <summary>
    /// The text
    /// </summary>
    public static readonly ID Text = new ID("{A8D8F413-6716-40E2-80F3-9C870CC14E8B}");

    #endregion

    #region Public Methods and Operators

    /// <summary>
    /// Gets the application item.
    /// </summary>
    /// <param name="pageItem">
    /// The page item.
    /// </param>
    /// <returns>
    /// Returns the application item.
    /// </returns>
    [CanBeNull]
    public static Item GetApplicationItem([NotNull] Item pageItem)
    {
      Assert.ArgumentNotNull(pageItem, "pageItem");

      while (pageItem != null)
      {
        if (pageItem.Is(Application))
        {
          return pageItem;
        }

        pageItem = pageItem.Parent;
      }

      return null;
    }

    /// <summary>
    /// Gets the icon.
    /// </summary>
    /// <param name="item">
    /// The item.
    /// </param>
    /// <param name="iconFieldName">
    /// Name of the icon field.
    /// </param>
    /// <returns>
    /// Returns the icon.
    /// </returns>
    [NotNull]
    public static HtmlString GetIcon([NotNull] Item item, [NotNull] string iconFieldName)
    {
      Assert.ArgumentNotNull(item, "item");
      Assert.ArgumentNotNull(iconFieldName, "iconFieldName");

      if (string.IsNullOrEmpty(iconFieldName))
      {
        return MvcHtmlString.Empty;
      }

      string result;
      switch (iconFieldName)
      {
        case "$icon":
          result = item.Appearance.Icon;
          break;

        default:
          result = item[iconFieldName];
          break;
      }

      if (string.IsNullOrEmpty(result))
      {
        return MvcHtmlString.Empty;
      }

      if (result.IndexOf('/') >= 0)
      {
        var icon = Images.GetThemedImageSource(result, ImageDimension.id16x16);

        return new HtmlString("<img src=\"" + icon + "\" height=\"16\" width=\"16\" alt =\"\" />");
      }

      return new HtmlString(string.Format("<i class=\"{0}\"></i>", result));
    }

    /// <summary>
    /// Gets the menu items.
    /// </summary>
    /// <param name="model">
    /// The model.
    /// </param>
    /// <param name="itemsDataSource">
    /// The items data source.
    /// </param>
    /// <param name="defaultMenuName">
    /// Default name of the menu.
    /// </param>
    /// <returns>
    /// Returns the menu items.
    /// </returns>
    [NotNull]
    public static IEnumerable<Item> GetMenuItems([NotNull] SpeakRenderingModel model, [NotNull] string itemsDataSource, [NotNull] string defaultMenuName = "")
    {
      Assert.ArgumentNotNull(model, "model");
      Assert.ArgumentNotNull(itemsDataSource, "itemsDataSource");
      Assert.ArgumentNotNull(defaultMenuName, "defaultMenuName");

      Item item = null;

      var app = GetApplicationItem(model.PageItem);

      if (!string.IsNullOrEmpty(itemsDataSource))
      {
        item = GetMenuItem(model, itemsDataSource, app);
      }

      if (item == null && !defaultMenuName.StartsWith("c_", StringComparison.Ordinal))
      {
        item = GetMenuItem(model, defaultMenuName, app);
      }

      if (item == null)
      {
        item = GetMenuItem(model, model.Rendering.RenderingItem.Name, app);
      }

      return item != null ? item.GetChildren() : Enumerable.Empty<Item>();
    }

    #endregion

    #region Methods

    /// <summary>
    /// Gets the menu items.
    /// </summary>
    /// <param name="model">
    /// The model.
    /// </param>
    /// <param name="itemsDataSource">
    /// The items data source.
    /// </param>
    /// <param name="app">
    /// The application.
    /// </param>
    /// <returns>
    /// Returns the menu item.
    /// </returns>
    [CanBeNull]
    private static Item GetMenuItem([NotNull] SpeakRenderingModel model, [NotNull] string itemsDataSource, [CanBeNull] Item app)
    {
      Debug.ArgumentNotNull(model, "model");
      Debug.ArgumentNotNull(itemsDataSource, "itemsDataSource");

      var path = itemsDataSource;
      var item = model.PageItem.Database.GetItem(path);

      if (item == null)
      {
        path = model.PageItem.Paths.Path + "/PageSettings/" + itemsDataSource;
        item = model.PageItem.Database.GetItem(path);
      }

      if (item == null && app != null)
      {
        path = app.Paths.Path + "/PageSettings/" + itemsDataSource;
        item = model.PageItem.Database.GetItem(path);
      }

      return item;
    }

    #endregion
  }
}