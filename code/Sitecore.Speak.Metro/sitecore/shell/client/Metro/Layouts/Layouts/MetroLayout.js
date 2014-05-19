require.config({
  paths: {
    metro: "/sitecore/shell/client/Metro/Assets/metro-ui/js/metro.min",
    jquerywidget: "/sitecore/shell/client/Metro/Assets/metro-ui/js/jquery.widget.min",
  },
  shim: {
    "metro": { deps: ['jquerywidget'] }
  }
});
