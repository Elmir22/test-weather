"use strict";
$(document).ready(function () {





    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("input").val()}&appid=012d3a58b4fd8ab58c50576d8d087fc1&units=metric`
            async function input() {
                let responce = await fetch(url)
                let data = await responce.json()
                $("#city").html(data.name)
                $("#temp").html(data.main.temp)
                $("#feels").html(data.main.feels_like)
                $("input").val("")
                console.log(data)
            }
            input()
        }
    })

    $(".btn").click(function (e) {
        e.preventDefault()
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("input").val()}&appid=012d3a58b4fd8ab58c50576d8d087fc1&units=metric`
        async function input() {
            let responce = await fetch(url)
            let data = await responce.json()
            $("#city").html(data.name)
            $("#temp").html(data.main.temp)
            $("#feels").html(data.main.feels_like)
            $("input").val("")
            console.log(data)
        }
        input()
    })





});