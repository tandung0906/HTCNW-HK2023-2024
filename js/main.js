/*/////////////////  Jquery HIỆU ỨNG CHO TRANG ĐẶT HÀNG ////////////////////////////*/
/*  Javascrip xử lý hiệu ứng khi cick vào ảnh sản phẩm */
function init() {
    var images2 = document.querySelectorAll(".picture img")
    for (var i = 0; i < images2.length; i++)
        images2[i].onclick = function () {
            var path = this.src
            var img = document.getElementById("mainimage")
            img.src = path
        }
    /* Jquery định dạng cho thanh số lượng sản phẩm */
    $('input.input-qty').each(function () {
        var $this = $(this),
            qty = $this.parent().find('.is-form'),
            min = Number($this.attr('min')),
            max = Number($this.attr('max'))
        if (min == 0) {
            var d = 0
        } else d = min
        $(qty).on('click', function () {
            if ($(this).hasClass('minus')) {
                if (d > min) d += -1
            } else if ($(this).hasClass('plus')) {
                var x = Number($this.val()) + 1
                if (x <= max) d += 1
            }
            $this.attr('value', d).val(d)
        })
    })
   


    /* Jquery định dạng cho phần hiện thị thanh đăng nhập */
    $(document).ready(function () {
        /*thanh đăng nhập ẩn trước khi click */
        $("#dangnhap,a.exit").hide()
        /*khi click thì dùng id over làm mờ trang và hiện hộp thoại ra */
        $(".dang-nhap").click(function () {
            $("body").append('<div id="over">');
            $("#dangnhap,a.exit").fadeIn(500)
            $("body").addClass("diem-dung")
        })
        /* khi click đóng hộp thoại */
        $(document).on('click', "a.exit,#over", function () {
            $("#over,#dangnhap,a.exit").fadeOut(300, function () {
                $("#over").remove();
                $("body").removeClass("diem-dung")
            })

        })

    })
}




/*/////////////////  Jquery HIỆU ỨNG CHO TRANG CHỦ ////////////////////////////*/
/* Jquery định dạng cho Thanh menu trượt */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 300) {
            $("nav").addClass("add")
        } else
            $("nav").removeClass("add")
    })
})

/* /////////////java script của phần cuối trang ///////////////// */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 5900) {
            $(".effect-1").addClass("effect-content")
            $(".effect-2").addClass("effect-content-1")
            $(".effect-3").addClass("effect-content-2")
            $(".effect-4").addClass("effect-content-3")
            $(".hieu-ung-anh-banh-trung-thu").addClass("effect-blur-image")
        }
    })

});
/* ////////////////////////Java script của phần sản phẩm ///////////////////////////*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1600) {
            $(".effect-left-right-1").addClass("slide-left-right-1")
        }
        if ($(this).scrollTop() >= 2300) {
            $(".effect-left-right-2").addClass("slide-left-right-2")
        }
        if ($(this).scrollTop() >= 3000) {
            $(".effect-left-right-3").addClass("slide-left-right-3")
        }
        if ($(this).scrollTop() >= 3700) {
            $(".effect-left-right-4").addClass("slide-left-right-4")

        }
    })

});
/* ///////////////////////Java Script của phần tin tức////////////////////////////////*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 5100) {
            $(".card").addClass("news-card-effect")

        }
        if ($(this).scrollTop() >= 4500) {
            $(".hieu-ung-anh-banh-trung-thu-0").addClass("effect-blur-image-0")

        }
    })
});
/* /////////////java script của phần go to top  ///////////////// */
$(document).ready(function () {
    $("#gototop").hide()
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500)
            $("#gototop").slideDown("3000")
        else
            $("#gototop").slideUp("3000")
    })
    $("#gototop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
});
// kiểm tra đăng ký
$(document).ready(function () {
    function KTName() {
        var re = /^[a-zA-Z]\w*/;
        if ($("#txtName").val() == "") {
            $("#spName").html("* Bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtName").val())) {
            $("#spName").html("*Phải bắt đầu bằng chữ cái");
            return false;
        }
        $("#spName").html("*");
        return true;
    }
    $("#txtName").blur(KTName);

    function KTPass() {
        var re = /(?=.*\d).{6,}/;
        if ($("#txtPass").val() == "") {
            $("#spPass").html("* Bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtPass").val())) {
            $("#spPass").html("* Phải có chữ, số, ít nhất 6 kí tự");
            return false;
        }
        $("#spPass").html("*");
        return true;
    }
    $("#txtPass").blur(KTPass);
    function XNPass(){
        if ($("#txtCfPass").val() == "") {
            $("#spCfPass").html("* Bắt buộc nhập");
            return false;
        }
        if(document.getElementById('txtCfPass').value != 
        document.getElementById('txtPass').value){
            $("#spCfPass").html("* Mật khẩu không trùng khớp");
            return false;
        }
        else{
            $("#spCfPass").html("*");
            return true;
        }                                                         
    }
    $("#txtCfPass").blur(XNPass);
    function KTsdt() {
        var sdt = /^0\d{3}\d{3}\d{3}$/;
        if ($("#txtTel").val() == "") {
            $("#spTel").html("* Bắt buộc nhập");
            return false;
        }
        if (!sdt.test($("#txtTel").val())) {
            $("#spTel").html("Nhập theo dạng 0xxxxxxxxx");
            return false;
        }
        $("#spTel").html("*");
        return true;
    }
    $("#txtTel").blur(KTsdt);
    function KTEmail() {
        var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ($("#txtEmail").val() == "") {
            $("#spEmail").html("* Bắt buộc nhập");
            return false;
        }
        if (!email.test($("#txtEmail").val())) {
            $("#spEmail").html("Nhập theo dạng Example@gmail.com");
            return false;
        }
        $("#spEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(KTEmail);
    $('#dk').click(function () {
        if (KTName() && KTPass() &&XNPass() && KTEmail() &&KTsdt()) {
            alert('Đăng ký thành công');
            return true;
        }
        else {

            return false;
        }
    })
});  