//CHOUFFE!

$(document).ready(function() {
    // SECTION 1
    var sec1visible = true;
    var sec2visible = false;
    var sec3visible = false;

        $("#sec1darrow").click(function() {
            $(".sec1").animate({
                height: "400px"
            }, 1000);
            $("#i1").fadeTo("slow", 1);
            $("#sec1darrow").fadeTo("slow", 0.2);
            $("#sec1uparrow").fadeTo("slow", 1);
            /*$("#sec2").animate({
                height: "0px"
            });
            var sec2visible = false;
            $("#sec3").animate({
                height: "0px"
            });
            var sec3visible = false;*/
            var sec1visible = true;
        });

    $("#sec1uparrow").click(function() {
        $(".sec1").animate({
            height: "0px"
        }, 1000);
        $("#i1").delay(500).fadeTo("slow", 0);
        $("#sec1darrow").fadeTo("slow", 1);
        $("#sec1uparrow").fadeTo("slow", 0.2);
        var sec1visible = false;
    });

    var i1clicked = true;
    $("#i1").click(function() {
        if (i1clicked === true) {
            $("#i1").delay(500).animate({
                height: "630px",
                width: "990px"
            }, 1000);
            $(".sec1").animate({
                height: "+=300px"
            }, 1000);
            $("#l1").fadeOut(0);
            $("#t1").fadeTo("fast", 0);
            i1clicked = false;
        } else {
            $("#i1").animate({
                height: "352px",
                width: "450px"
            }, 700);
            $(".sec1").animate({
                height: "-=300px"
            }, 1000);
            $("#l1").delay(1000).fadeIn(2000);
            $("#t1").delay(1000).fadeTo("fast", 1);
            i1clicked = true;
        }
    });
    // SECTION 2
    if (sec2visible === false) {
        $("#sec2darrow").click(function() {
            $(".sec2").animate({
                height: "400px"
            }, 1000);
            $("#i2").fadeTo("slow", 1);
            $("#sec2darrow").fadeTo("slow", 0.2);
            $("#sec2uparrow").fadeTo("slow", 1);
            /*$("#sec1").animate({
                height: "0px"
            });
            var sec1visible = false;
            $("#sec3").animate({
                height: "0px"
            });
            var sec3visible = false;*/
            var sec2visible = true;
        });
    }
    $("#sec2uparrow").click(function() {
        $(".sec2").animate({
            height: "0px"
        }, 1000);
        $("#i2").delay(500).fadeTo("slow", 0);
        $("#sec2darrow").fadeTo("slow", 1);
        $("#sec2uparrow").fadeTo("slow", 0.2);
        var sec2visible = false;
    });

    var i2clicked = true;
    $("#i2").click(function() {
        if (i2clicked === true) {
            $("#i2").delay(500).animate({
                height: "630px",
                width: "990px"
            }, 1000);
            $(".sec2").animate({
                height: "+=300px"
            }, 1000);
            $("#l2").fadeOut(0);
            $("#t2").fadeTo("fast", 0);
            i2clicked = false;
        } else {
            $("#i2").animate({
                height: "308px",
                width: "450px"
            }, 700);
            $(".sec2").animate({
                height: "-=300px"
            }, 1000);
            $("#l2").delay(1000).fadeIn(2000);
            $("#t2").delay(1000).fadeTo("fast", 1);
            i2clicked = true;
        }
    });
    // SECTION 3
    if (sec3visible === false) {
        $("#sec3darrow").click(function() {
            $(".sec3").animate({
                height: "400px"
            }, 1000);
            $("#i3").fadeTo("slow", 1);
            $("#sec3darrow").fadeTo("slow", 0.2);
            $("#sec3uparrow").fadeTo("slow", 1);
            /*$("#sec1").animate({
                height: "0px"
            });
            var sec1visible = false;
            $("#sec2").animate({
                height: "0px"
            });
            var sec2visible = false;*/
            var sec3visible = true;
        });
    }
    $("#sec3uparrow").click(function() {
        $(".sec3").animate({
            height: "0px"
        }, 1000);
        $("#i3").delay(500).fadeTo("slow", 0);
        $("#sec3darrow").fadeTo("slow", 1);
        $("#sec3uparrow").fadeTo("slow", 0.2);
        var sec3visible = false;
    });
    var i3clicked = true;
    $("#i3").click(function() {
        if (i3clicked === true) {
            $("#i3").delay(500).animate({
                height: "630px",
                width: "990px"
            }, 1000);
            $(".sec3").animate({
                height: "+=300px"
            }, 1000);
            $("#l3").fadeOut(0);
            $("#t3").fadeTo("fast", 0);
            i3clicked = false;
        } else {
            $("#i3").animate({
                height: "308px",
                width: "450px"
            }, 700);
            $(".sec3").animate({
                height: "-=300px"
            }, 1000);
            $("#l3").delay(1000).fadeIn(2000);
            $("#t3").delay(1000).fadeTo("fast", 1);
            i3clicked = true;
        }
    });
    // CALENDRIER
    var calvisible = false;
    if (calvisible === false) {
        $("#caldarrow").click(function() {
            $("#imgcalendrier").animate({
                height: "200px"
            }, 500);
            $("#caldarrow").fadeTo("fast", 0.2);
            $("#caluparrow").fadeTo("fast", 1);
            var visible = true;
            $(".calendar").animate({
                height: "400px"
            });
        });
    }
    $("#caluparrow").click(function() {
        $("#imgcalendrier").animate({
            height: "0px"
        });
        $("#caldarrow").fadeTo("slow", 1);
        $("#caluparrow").fadeTo("slow", 0.2);
        var visible = false;
        $(".calendar").animate({
            height: "179px"
        });
    });
    // ASCENSEUR
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
});
