<?php

class About extends Controller {
    public function index($nama = "nama", $pekerjaan = "pekerjaan", $umur = 0) {
        $data["nama"] = $nama;
        $data["pekerjaan"] = $pekerjaan;
        $data["umur"] = $umur;
        $data["judul"] = "About";
        $this->view("templates/header", $data);
        $this->view("about/index", $data);
        $this->view("templates/footer");
    }
    public function page() {
        $data["judul"] = "About page";
        $this->view("templates/header", $data);
        $this->view("About/page");
        $this->view("templates/footer");
    }
}