
/* jquery thêm class hiệu ứng hover cho tất cả các ảnh có class .article-item */
$(document).ready(function(){
    $(".article-item").addClass("c4-izmir c4-border-right c4-image-pan-left c4-gradient-top")
    $("div.three-product-item").addClass("wow animate__fadeInRight animate__slow")
    $("div.item-bottom").addClass("wow animate__fadeInUp animate__slow")
    wow = new WOW({
              boxClass:     'wow',      // default
              animateClass: 'animate__animated', // default
              offset:       0,          // default
              mobile:       true,       // default
              live:         true        // default
            })
            wow.init();
})
 
