function updateSliderValue() {
    var slider = document.getElementById("osszesitett");
    var sliderValueSpan = document.getElementById("sliderValue");
    sliderValueSpan.textContent = slider.value;
}