window.onload = function() {

    var txt = document.getElementById('text');


    txt.innerHTML = 10;
    setTimeout(function() {
        txt.innerHTML = 9;
        setTimeout(function() {
            txt.innerHTML = 8;
            setTimeout(function() {
                txt.innerHTML = 7;
                setTimeout(function() {
                    txt.innerHTML = 6;
                    setTimeout(function() {
                        txt.innerHTML = 5;
                        setTimeout(function() {
                            txt.innerHTML = 4;
                            setTimeout(function() {
                                txt.innerHTML = 3;
                                setTimeout(function() {
                                    txt.innerHTML = 2;
                                    setTimeout(function() {
                                        txt.innerHTML = 1;
                                        setTimeout(function() {
                                            txt.innerHTML = 'Happy Independence Day';

                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)

}