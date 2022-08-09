$(document).ready(function() {
    let owl = $(".card-tags")
    owl.owlCarousel({
      autoWidth:true,
    });

    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    $(".card-product").on("click", function() {
        if ($(this).hasClass("active")) {
            $(".card-product.active").removeClass("active")
        } else {
            $(".card-product.active").removeClass("active")
            $(this).addClass("active")
        }
    })

    $("#btn-delete").click(function() {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
                swal("Your file has been deleted!", {
                    icon: "success",
                });
            }
          });
    })

})