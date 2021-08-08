$(document).ready(function () {
    $('.newTask').val('');
    var i = 0;
    for(i;i<localStorage.length;i++)
    {
        $('.tasks').html("<button class='taskItem' >"+localStorage.getItem(localStorage.key(i))+"</button>" + $('.tasks').html());

    }

    $('.addBtn').on('click',function(){

        var newText= $('.newTask').val();
        if(newText == ''){
            $('.error').addClass('active');
        }else{
            localStorage.setItem(localStorage.length,newText);
            $('.error').removeClass('active');
            $('.tasks').html("<button class='taskItem' >"+newText+"</button>" + $('.tasks').html());
            console.log($('.tasks').html());
        }
        $('.newTask').val('');
    });
    $('body').delegate('.taskItem','click',function() {
    //$('.').on('click',function(){
        $(this).addClass('line');
    });
    $('.clearBtn').on('click',function(){
        alert('Sure ?');
        $('.tasks').html('');
        localStorage.clear();
    });
});