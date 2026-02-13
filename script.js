$(document).ready(function () {
  var envelope = $("#envelope");
  var btnOpen = $("#open");
  var btnReset = $("#reset");

  btnOpen.click(function () {
    envelope.removeClass("close").addClass("open");
  });

  btnReset.click(function () {
    envelope.removeClass("open").addClass("close");
  });
});

