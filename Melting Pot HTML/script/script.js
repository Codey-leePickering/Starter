$(document).on("click", ".like-btn", function(e) {
    e.preventDefault();

    var $label = $(this).find('.text'),
        $badge = $(this).find('.badge'),
        count = Number($badge.text()),
        active = $(this).hasClass('active');

    $label.text(active ? 'Like' : 'Liked');
    $badge.text(active ? count + 1 : count + 1);
    $(this).toggleClass('active');
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}