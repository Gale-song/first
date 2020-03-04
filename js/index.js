
$(function () {
    banner()
    initMobileTab()
    $('[data-toggle="tooltip"]').tooltip()
})

var banner = function () {
   
    var getData = function (callback) {
        if (window.data) {
            callback && callback(window.data)
        } else {
            $.ajax({
                type: 'get',
                url: 'js/data.json',
                dataType: "json",
                async: true,
                data: '',
                success: function (data) {
                    window.data = data
                    callback && callback(window.data)
                }
            })
        }
    }
    var render = function () {
        getData(function (data) {
            var isMobile = $(window).width() < 768
            var pointHtml = template('pointTem', {list: data})
            var imgHtml = template('imgTem', {list: data, isM: isMobile})

            $('.carousel-indicators').html(pointHtml)
            $('.carousel-inner').html(imgHtml)
        })
    }

    $(window).on('resize', function () {
        render()
    }).trigger('resize')

    var startX = 0
    var distanceX = 0
    var isMove = false
    $(".mobile_banner").on("touchstart", function (e) {
        startX = e.originalEvent.touches[0].clientX
    }).on("touchmove", function (e) {
        var moveX = e.originalEvent.touches[0].clientX
        distanceX = moveX - startX
        isMove = true
    }).on("touchend", function (e) {
        if (isMove && Math.abs(distanceX) > 50) {
            if (distanceX < 0) {
                $('#carousel-example-generic').carousel('next')
            } else {
                $('#carousel-example-generic').carousel('prev')
            }

            startX = 0
            distanceX = 0
            isMove = false

        }
    })
}
var initMobileTab = function () {
    var $navTabs = $(".mobile_product .nav-tabs")
    var $navTabsParent = $(".mobile_product .nav-tabs-parent")
    var width = 0
    $navTabs.find('li').each(function (i, item) {
        var $currLi = $(this)
        var liWidth = $currLi.outerWidth(true)

        width += liWidth
    })
    console.log(width)
    $navTabs.width(width)

    new IScroll($navTabsParent.get(0),{
        scrollY:false,
        scrollX:true
    })
}

