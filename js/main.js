$(document).ready(function () {
    const names = ["şahbatur", "gülbatur", "şahinbey", "abay kızı", "abaküs"]
    $("#btncount").click(function () {
        const count = $("#count").val();
        if (isNaN(count)) {
            alert("lütfen sadece sayısal değer giriniz");
            $("#count").val("");
            return;
        }
        if (count > 6) {
            alert("max girilebilen değer 6dır");
            return;
        }


        let templates = []
        for (let i = 1; i <= count; i++) {
            templates.push(`<div class="row"> <div class="col"> <img src="./img/h${i}.gif" alt=""></div></div>`);
        }
        document.getElementById("container").innerHTML = templates.join("</br>");
        $("#count").val("");
    });



    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);

    }
    $("#btnStart").click(function () {
        var horses = document.getElementsByTagName("img");
        if (horses.length == 0) {
            alert("lütfen adet giriniz");
            return;
        }
        var lblFinish = $(".finish-label").position().left;
        var timer = setInterval(() => {
            $.each(horses, (key, value) => {


                const itemWidth = $(value).position().left + $(value).width();

                let _couter = 0;
                let _winner = -1;
                for (let i = 0; i < horses.length; i++) {
                    if ($(horses[i]).position().left > _couter) {
                        _couter = $(horses[i]).position().left;
                        _winner = i;
                    }
                }
                $(".h4").text(`yarısı ${_winner +1}. kulvardaki ${names[_winner]} önde götürüyor` )

                if (itemWidth > lblFinish) {
                    clearInterval(timer);
                    alert("yarısı " + names[key] + " isimli at kazandı");
                    $("img").addClass("d-none");
                    $(".h4").addClass("d-none");
                    return;
                }
                let position = $(value).position().left;
                $(value).css("left", (position + random(5, 30)));

            });
        }, (70));
    });

})