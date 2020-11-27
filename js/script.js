var a = document.getElementById('preloder');

function pre(){
    a.style.display = "none" ;
}

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('change');
    }
    else{
        $('nav').removeClass('change');

    }
})


function toggleBtn(){
    document.getElementById('toggle').classList.toggle('tgl');
    document.getElementById('navi').classList.toggle('nav');
}

var qoute1 = document.getElementById('qoute1');
var qoute2 = document.getElementById('qoute2');
var qoute3 = document.getElementById('qoute3');

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');

box1.onclick = function(){
    
}

box2.onclick = function(){
    
}

box3.onclick = function(){
    
}
