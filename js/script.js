$(document).ready(function () {
    $(".boxes > div").click(function () {
        $(this).parent().hasClass("boxesfirsttry")
            ? ($(".boxes").removeClass("boxesfirsttry"),
              $(this).addClass("openbox"),
              $(this).find(".try").hide(),
              $(this).find(".opentry").show(),
              setTimeout(function () {
                  $(".sweet-overlay").show(), $(".sweet-alert").show();
              }, 500))
            : $(this).parent().hasClass("boxeslasttry") &&
              ($(this).hasClass("openbox") ||
                  ($(this).find(".try").hide(),
                  $(this).find(".opentry").show(),
                  $(this).find(".boxtext").css("display", "block"),
                  setTimeout(function () {
                      $(".new-comebacker-overlay").is(":visible") && $(".new-comebacker-overlay").hide(),
                          $(".new-comebacker-overlay .boxes-is-open").show(),
                          $(".new-comebacker-overlay .boxes-not-open").hide(),
                          $(".spin-result-wrapper").show(),
                          setTimeout(function () {
                              $("#boxesContainer").slideUp(250),
                                  setTimeout(function () {
                                      $(".order_block").slideDown(250);
                                  }, 500),
                                  start_timer();
                          }, 500);
                  }, 500)));
    }),
        $("#update").click(function () {
            $(".sweet-overlay").hide(), $(".sweet-alert").hide(), $(".boxes").addClass("boxeslasttry");
        }),
        $(".pop-up-button, .close-popup").click(function () {
            $(".spin-result-wrapper").hide();
        });
});
var intr,
    time = 600;
function start_timer() {
    intr = setInterval(tick, 1e3);
}
function tick() {
    time -= 1;
    var e = Math.floor(time / 60),
        t = time - 60 * e;
    0 == e && 0 == t && clearInterval(intr), (t = t >= 10 ? t : "0" + t), $("#min").html("0" + e), $("#sec").html(t);
}
