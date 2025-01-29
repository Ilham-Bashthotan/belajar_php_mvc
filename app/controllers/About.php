<?php

class About {
    public function index($nama = "nama", $pekerjaan = "pekerjaan") {
        echo "Halo saya $nama, saya adalah seorang $pekerjaan<br>";
    }
    public function page() {
        echo "About/page";
    }
}