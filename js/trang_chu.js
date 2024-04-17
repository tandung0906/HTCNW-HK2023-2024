/*/////////////////  Jquery HIỆU ỨNG CHO TRANG CHỦ ////////////////////////////*/

$(document).ready(function () {
  // form đăng nhập
  $("#btn-login").click(function () {
    $("#myModal").modal();
  });
  // kiểm tra đăng nhập
  function KTName() {
    var re = /^[a-zA-Z]\w*/;
    if ($("#txtName").val() == "") {
      $("#tbName").html("* Bắt buộc nhập");
      return false;
    }
    if (!re.test($("#txtName").val())) {
      $("#tbName").html("*Phải bắt đầu bằng chữ cái");
      return false;
    }
    $("#spName").html("*");
    return true;
  }
  $("#txtName").blur(KTName);

  function KTPass() {
    var re = /(?=.*\d).{6,}/;
    if ($("#txtPass").val() == "") {
      $("#tbPass").html("* Bắt buộc nhập");
      return false;
    }
    if (!re.test($("#txtPass").val())) {
      $("#tbPass").html("* Phải có chữ, số, ít nhất 6 kí tự");
      return false;
    }
    $("#spPass").html("*");
    return true;
  }
  $("#txtPass").blur(KTPass);

  $('#btnDangNhap').click(function () {
    if (KTName()==true && KTPass()==true) {
      alert('Đăng nhập thành công');
      $("#myModal").modal('hide');
      return true;
    }
    else {
      alert('vui lòng nhập đầy đủ thông tin');
      return false;
    }
  })
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $("nav").addClass("add");
    } else
      $("nav").removeClass("add");
  })
})
/* Jquery định dạng cho phần hiện thị thanh đăng nhập */
$(document).ready(function () {
  /*thanh đăng nhập ẩn trước khi click */
  $("#dangnhap,a.exit").hide()

  /* khi click đóng hộp thoại */
  $(document).on('click', "a.exit,#over", function () {
    $("#over,#dangnhap,a.exit").fadeOut(300, function () {
      $("#over").remove();
      $("body").removeClass("diem-dung")
    })
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
})
/* ///////////////Đếm số ///////////// */
$(document).ready(function () {
  $('.counter')
})
// 
$(document).ready(function () {
  /* ban đầu thanh chọn ở trạng thái ẩn */
  $(".list").hide()
  /* khi rê chuột vào */
  $(".last").mouseenter(function () {
    $(".list").removeClass("sliceinbottom")
    $(".list").show().addClass("sliceintop");
  })
  /* khi rời chuột khỏi danh sách các loại */
  $(".last").mouseleave(function () {
    $(".list").fadeOut(300).addClass(" sliceinbottom ");
  })
})

/*/////////////////  Jquery HIỆU ỨNG CHO TRANG CHỦ ////////////////////////////*/
/* Jquery định dạng cho Thanh menu trượt */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $("nav").addClass("add");
    } else
      $("nav").removeClass("add");
  })
})

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
})
/* ///////////////Đếm số ///////////// */
$(document).ready(function () {
  $('.counter')
})

/* jquery menu */
$(document).ready(function () {
  /* ban đầu thanh chọn ở trạng thái ẩn */
  $(".list").hide()
  /* khi rê chuột  */
  $(".last").mouseenter(function () {
    $(".list").removeClass("sliceinbottom")
    $(".list").show().addClass("sliceintop");
  })
  /* khi rời chuột */
  $(".last").mouseleave(function () {
    $(".list").fadeOut(300).addClass(" sliceinbottom ");
  })
})
/////////////////////////////wowjs////////////////////////////////
$(document).ready(function () {
  $("div.phan-text-trai").addClass("wow animate__fadeInLeft")
  $("div.the-banh-1").addClass("wow animate__fadeInLeft")
  $("div.the-banh-2").addClass("wow animate__fadeInLeft")
  $("div.the-banh-3").addClass("wow animate__fadeInRight")
  $("div.the-banh-4").addClass("wow animate__fadeInRight")
  $("div.effect-left-right-1").addClass("wow animate__fadeInUp")
  $("div.effect-left-right-2").addClass("wow animate__fadeInUp")
  $("div.effect-left-right-3").addClass("wow animate__fadeInUp")
  $("div.effect-left-right-4").addClass("wow animate__fadeInUp")
  $("div.hinh-anh-header").addClass("wow animate__fadeIn")
  $("div.card").addClass("wow animate__fadeInDown")
  $("div.effect-1").addClass("wow animate__fadeInLeftBig")
  $("div.effect-2").addClass("wow animate__fadeInLeftBig")
  $("div.effect-3").addClass("wow animate__fadeInLeftBig")
  $("div.effect-4").addClass("wow animate__fadeInLeftBig")
  wow = new WOW({
    boxClass: 'wow',      // default
    animateClass: 'animate__animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
  })
  wow.init();
})