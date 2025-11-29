function update(previewPic) {

    console.log("Hover kích hoạt");
    console.log("ALT:", previewPic.alt);
    console.log("SRC:", previewPic.src);

    // Cập nhật văn bản trong div#image
    document.getElementById("image").innerHTML = previewPic.alt;

    // Cập nhật nền bằng hình ảnh đang hover
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Mouseout kích hoạt");

    // Trả lại hình nền trống
    document.getElementById("image").style.backgroundImage = "url('')";

    // Trả lại văn bản gốc
    document.getElementById("image").innerHTML =
        "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
