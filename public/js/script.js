$(function() {
    $(".tombolTambahData").on("click", function() {
        $("#judulModalLabel").html("Tambah data mahasiswa")
        $(".modal-footer button[type=submit]").html("Tambah Data")
    })
    $(".tampilModalUbah").on("click", function() {
        $("#judulModalLabel").html("Ubah data mahasiswa")
        $(".modal-footer button[type=submit]").html("Ubah Data")
        $(".modal-body form").attr("action", "http://localhost/belajar_php_mvc/public/mahasiswa/ubah")

        const id = $(this).data("id")
        $.ajax({
            url: "http://localhost/belajar_php_mvc/public/mahasiswa/getubah",
            data: {id : id},
            method: "post",
            dataType: "json",
            success: function(data) {
                $("#nama").val(data.nama)
                $("#nrp").val(data.nrp)
                $("#email").val(data.email)
                $("#jurusan").val(data.jurusan)
                $("#id").val(data.id)
            }
        })
    })
})