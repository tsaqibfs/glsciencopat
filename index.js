function showForm() {
    document.getElementById("glb_form").classList.add("hidden");
    document.getElementById("glbb1_form").classList.add("hidden");
    document.getElementById("glbb2_form").classList.add("hidden");
    document.getElementById("glbb3_form").classList.add("hidden");

    var selectedGl = document.getElementById("gl").value;

    if (selectedGl === "GLB") {
        document.getElementById("glb_form").classList.remove("hidden");
        document.getElementById("resultLabel").innerText = "Hasil jarak:";
    } else if (selectedGl === "GLBB1") {
        document.getElementById("glbb1_form").classList.remove("hidden");
        document.getElementById("resultLabel").innerText = "Hasil kecepatan akhir:";
    } else if (selectedGl === "GLBB2") {
        document.getElementById("glbb2_form").classList.remove("hidden");
        document.getElementById("resultLabel").innerText = "Hasil jarak:";
    } else if (selectedGl === "GLBB3") {
        document.getElementById("glbb3_form").classList.remove("hidden");
        document.getElementById("resultLabel").innerText = "Hasil kecepatan akhir kuadrat (Vt²):";
    }
}

function calculate() {
    var gl = document.getElementById("gl").value;
    var result = 0;
    var kecepatanInput, waktuInput, waktuInput1, waktuInput2, kecepatanawalInput1, kecepatanawalInput2, kecepatanawalInput3, percepatanInput1, percepatanInput2, percepatanInput3, jarakInput;

    if (gl === "GLB") {
        document.getElementById("glb_form").classList.remove("hidden");
        document.getElementById("resultLabel").innerText = "Hasil jarak:";
    } else if (gl === "GLBB1") {
        document.getElementById("glbb1_form").classList.remove("hidden");
        document.getElementById("resultLabel").innerText = "Hasil kecepatan akhir:";
    } else if (gl === "GLBB2") {
        document.getElementById("glbb2_form").classList.remove("hidden");
        document.getElementById("resultLabel").innerText = "Hasil jarak:";
    } else if (gl === "GLBB3") {
        document.getElementById("glbb3_form").classList.remove("hidden");
        document.getElementById("resultLabel").innerText = "Hasil kecepatan akhir kuadrat (Vt²):";
    }

    switch (gl) {
        case "GLB":
            kecepatanInput = parseFloat(document.getElementById("kecepatanInput").value);
            waktuInput = parseFloat(document.getElementById("waktuInput").value);
            result = kecepatanInput * waktuInput;
            break;
        case "GLBB1":
            kecepatanawalInput1 = parseFloat(document.getElementById("kecepatanawalInput1").value);
            percepatanInput1 = parseFloat(document.getElementById("percepatanInput1").value);
            waktuInput1 = parseFloat(document.getElementById("waktuInput1").value);
            result = kecepatanawalInput1 + percepatanInput1 * waktuInput1;
            break;
        case "GLBB2":
            kecepatanawalInput2 = parseFloat(document.getElementById("kecepatanawalInput2").value);
            waktuInput2 = parseFloat(document.getElementById("waktuInput2").value);
            percepatanInput2 = parseFloat(document.getElementById("percepatanInput2").value);
            result = kecepatanawalInput2 * waktuInput2 + 0.5 * percepatanInput2 * waktuInput2 * waktuInput2;
            break;
        case "GLBB3":
            kecepatanawalInput3 = parseFloat(document.getElementById("kecepatanawalInput3").value);
            percepatanInput3 = parseFloat(document.getElementById("percepatanInput3").value);
            jarakInput = parseFloat(document.getElementById("jarakInput").value);
            result = kecepatanawalInput3 * kecepatanawalInput3 + 2 * percepatanInput3 * jarakInput;
            break;
        default:
            result = "Invalid calculation type";
    }

    document.getElementById("result").value = result;
}