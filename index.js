$(function() {
    var section = $("");
    var backgrounds = ["url(gcb.jpg)", "url(image2.jpg)"];
    var current = 0;

    function nextBackground() {
        section.css(
            "background",
            backgrounds[(current = ++current % backgrounds.length)]
        );

        setTimeout(nextBackground, 10000);
    }
    setTimeout(nextBackground, 5000);
    section.css("background", backgrounds[0]);
});