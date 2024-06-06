function myFunction(x) {
    var content = x.innerText.trim();

    // Ganti ikon dan warna berdasarkan isi elemen
    if (content === "light_mode") {
        x.innerText = "dark_mode";
        x.style.color = "#EBEBEB"; // Ganti dengan warna yang sesuai

        var nav = document.getElementById("Navbar");
        nav.style.backgroundColor = "#262d35";

        var element = document.getElementById("home");
        element.style.backgroundColor = "#262d35";

        var teks = document.getElementById("content");
        teks.style.color = "#EBEBEB";

        var logo = document.getElementsByClassName("navbar-logo");
        for (var i = 0; i < logo.length; i++) {
            logo[i].style.color = "#EBEBEB";
        }

        var bar = document.querySelectorAll(".navbar-nav a");
        for (var i = 0; i < bar.length; i++) {
            bar[i].style.color = "#EBEBEB";
        }

        var prj = document.getElementById("project");
        prj.style.backgroundColor = "#262d35";

        var bod = document.querySelectorAll(".card");
        for (var i = 0; i < bod.length; i++) {
            bod[i].style.backgroundColor = "#EBEBEB";
        }

        var abt_teks = document.querySelectorAll(".text h2");
        for (var i = 0; i < abt_teks.length; i++) {
            abt_teks[i].style.color = "#262d35";
        }

        var abt_teks = document.querySelectorAll(".text h3");
        for (var i = 0; i < abt_teks.length; i++) {
            abt_teks[i].style.color = "#262d35";
        }

        var prj_teks = document.querySelectorAll(".konten h4");
        for (var i = 0; i < prj_teks.length; i++) {
            prj_teks[i].style.color = "#EBEBEB";
        }

        var kontak = document.querySelectorAll(".kontener h2");
        for (var i = 0; i < kontak.length; i++) {
            kontak[i].style.color = "#262d35";
        }

        var cp = document.querySelectorAll(".copyright");
        for (var i = 0; i < cp.length; i++) {
            cp[i].style.color = "#262d35";
        }


    } else {
        x.innerText = "light_mode";
        x.style.color = ""; // Reset warna ke default atau ganti dengan warna lain jika diperlukan

        var nav = document.getElementById("Navbar");
        nav.style.backgroundColor = "";

        var element = document.getElementById("home");
        element.style.backgroundColor = "";

        var teks = document.getElementById("content");
        teks.style.color = "";

        var logo = document.getElementsByClassName("navbar-logo");
        for (var i = 0; i < logo.length; i++) {
            logo[i].style.color = "";
        }

        var bar = document.querySelectorAll(".navbar-nav a");
        for (var i = 0; i < bar.length; i++) {
            bar[i].style.color = "";
        }

        var prj = document.getElementById("project");
        prj.style.backgroundColor = "";

        var bod = document.querySelectorAll(".card");
        for (var i = 0; i < bod.length; i++) {
            bod[i].style.backgroundColor = "";
        }

        var abt_teks = document.querySelectorAll(".text h2");
        for (var i = 0; i < abt_teks.length; i++) {
            abt_teks[i].style.color = "";
        }

        var abt_teks = document.querySelectorAll(".text h3");
        for (var i = 0; i < abt_teks.length; i++) {
            abt_teks[i].style.color = "";
        }

        var prj_teks = document.querySelectorAll(".konten h4");
        for (var i = 0; i < prj_teks.length; i++) {
            prj_teks[i].style.color = "";
        }

        var kontak = document.querySelectorAll(".kontener h2");
        for (var i = 0; i < kontak.length; i++) {
            kontak[i].style.color = "";
        }

        var cp = document.querySelectorAll(".copyright");
        for (var i = 0; i < cp.length; i++) {
            cp[i].style.color = "";
        }
    }
}