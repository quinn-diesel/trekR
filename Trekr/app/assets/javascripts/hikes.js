
console.log("loaded.");

$(document).ready(function(){

    console.log("loaded.");

window.onresize = function(event){
    resizeDiv();
}

function resizeDiv(){
    vpw = $(window).width();
    vph = $(window).height();
    $('#mapid').css({'height':vph + 'px'});
}



}); // doc ready
