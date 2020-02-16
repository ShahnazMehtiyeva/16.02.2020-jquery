// $(document).ready(function () {
//     let ptag = $('p');

// })

// $(document).ready(function () {
//     let div = $('.container div');

//     let count = 1;
//     let 


//     if (count < 10) {
//         div.click(function () {


//                 if (count % 2 == 1 && !$(this).hasClass(clicked) ) {
//                     $(this).css('background-image', 'url(/asserts/x.png)');
//                     $(this).addClass("clicked");

//                 } else if( count % 2 == 0 && !$(this).hasClass(clicked)){
//                     $(this).css('background-image', 'url(/asserts/o.png)');
//                     $(this).addClass("clicked");
//                 }

//             count++;


//         })


// }

// })




$(document).ready(function () {
    $('.first').click(function () {
        $('.modal').addClass('active');
        $('.modal').click(function () {
            $('.modal').removeClass('active');
        })

        let data = $(this).closest('tr').find("td").toArray();

        $('.content p').empty();
        for (let i = 0; i < data.length; i++) {

            $('.content p').append(data[i].innerText + " ");


        }
    })


    $('.third').click(function () {
        $(this).closest('tr').find("td").remove();
    })

    $('.second').click(function () {
        
    })
})