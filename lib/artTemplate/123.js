/**
 * Created by 011010 on 2020/2/6.
 */
$(function () {
    // var data =
    //     {
    //         "pcurl":"images/slide_01_2000x410.jpg",
    //         "murl":"images/slide_01_640x340.jpg"
    //     }
    // var pointHtml = template('pointTem', {list: data,isAdmin:true})
    // console.log(pointHtml)
    // $('.carousel-indicators').html(pointHtml)
    // console.log(123)
    var data =
    {
        "pcurl":"images/slide_01_2000x410.jpg",
        "murl":"images/slide_01_640x340.jpg"
    }
    var pointHtml = template('pointTem',{list:data,isAdmin:true})
    console.log(pointHtml)
    document.getElementById('p1').innerHTML=pointHtml
})

// var data =
// {
//     "pcurl":"images/slide_01_2000x410.jpg",
//     "murl":"images/slide_01_640x340.jpg"
// }
// var pointHtml = template('pointTem',{list:data,isAdmin:true})
// console.log(pointHtml)
// document.getElementById('p1').innerHTML=pointHtml