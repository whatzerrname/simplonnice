$(document).ready(function() {
    // SECTION 1
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
    var visible = false;
    if (visible === false) {
        $("#darrow").click(function() {
            $("#imgcalendrier").animate({
                height: "200px"
            },500);
            $("#darrow").fadeTo("fast", 0.2);
            $("#uparrow").fadeTo("fast", 1);
            var visible = true;
            $(".calendar").animate({
                height: "400px"
            });
        });
    }
    $("#uparrow").click(function() {
        $("#imgcalendrier").animate({
            height: "0px"
        });
        $("#darrow").fadeTo("slow", 1);
        $("#uparrow").fadeTo("slow", 0.2);
        var visible = false;
        $(".calendar").animate({
            height: "179px"
        });
    });
});
