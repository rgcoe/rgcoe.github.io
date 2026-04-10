$(document).ready(function () {
  // Toggle ABS/BIB panels rendered below the links row.
  $(".details-toggle-btn").on("click", function () {
    const targetId = $(this).data("target");
    if (!targetId) {
      return;
    }

    const $entry = $(this).closest(".row");
    const $panels = $entry.find(".details-panels .details-content");
    const $target = $entry.find("#" + targetId);
    const wasHidden = $target.prop("hidden");

    $panels.prop("hidden", true);
    if (wasHidden) {
      $target.prop("hidden", false);
    }
  });

  // Keep only one publication details panel open per entry.
  $("details.details-toggle").on("toggle", function (event) {
    if (!this.open) {
      return;
    }

    const $links = $(this).closest(".links");
    $links.find("details.details-toggle").each(function () {
      if (this !== event.currentTarget) {
        this.open = false;
      }
    });
  });

  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
