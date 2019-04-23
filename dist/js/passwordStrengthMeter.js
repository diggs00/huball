(function( $ ) {


    //password strength metere

    var bar = $('.password-meter-bar');  //find bar
    bar.width(0);  //set initial width to 0
    var progressBody = $('.password-meter-body');
    var barRightPadding = 0; //makes room for copy

    $(window).resize(function() {
        //resize just happened, pixels changed
        var barWidth = bar.parent().width();
        var s = $( ".gmocPasswordField" ).val();
        var slen = s.length;
        if(slen > 1){
            bar.width(barWidth - barRightPadding);
        }
    });

    function setProgress(percent){
        if(percent <= 100){
            $('.password-meter-container').show();
            var barWidth = bar.parent().width();
            bar.removeClass();

            var proLength = 0;
            var modifier = percent/100;
            proLength = barWidth*modifier;
            bar.width(proLength - barRightPadding);

            if(percent <= 50){
                bar.addClass('password-meter-bar password-meter-bar-weak');
                progressBody.html("<p><small>Weak</small></p>");
            }else if(percent <= 80){
                bar.addClass('password-meter-bar password-meter-bar-ok');
                progressBody.html("<p><small>OK</small></p>");
            }else{
                bar.addClass('password-meter-bar password-meter-bar-strong');
                progressBody.html("<p><small>Strong</small></p>");
            }
        }
    }

    //get password length and pass to setProgress
    $( ".gmocPasswordField" ).keydown(function() {
        console.log('here')
        var s = $( ".gmocPasswordField" ).val();
        var slen = s.length;
        var snum = parseFloat(slen);
        var percentages = (snum/100)*1000;

        //needs to pass a value of 1-100 based on strength
        setProgress(percentages);
    });


}( window.jQuery ));