var partners = document.getElementById("partners");
var aff_res = document.getElementById('aff_res');
function showoption() {
    var aff_res = document.getElementById('aff_res');
    aff_res.removeAttribute('class', 'display');
}

function hideoption() {
    var aff_res = document.getElementById('aff_res');
    aff_res.setAttribute('class', 'display');
}

partners.addEventListener('mouseenter', showoption);
aff_res.addEventListener('mouseleave', hideoption);

var month = document.getElementById('monthly');
var semi_year = document.getElementById('semi_yearly');
var year = document.getElementById('yearly');
month.style.backgroundColor = "#465DEF";

function showmonthpricing(e) {
    var month = document.getElementById('monthly');
    var semi_year = document.getElementById('semi_yearly');
    var year = document.getElementById('yearly');
    month.style.backgroundColor = "#465DEF";
    year.style.backgroundColor = "#FFFFFF";
    semi_year.style.backgroundColor = "#FFFFFF";
}

function showsemiyearpricing(e) {
    var semi_year = document.getElementById('semi_yearly');
    var month = document.getElementById('monthly');
    var year = document.getElementById('yearly');
    var price2 = document.getElementById("price_box2")
    var price3 = document.getElementById("price_box3");
    price2.textContent = "22";
    price3.textContent = "69";
    semi_year.style.backgroundColor = "#465DEF";
    month.style.backgroundColor = "#FFFFFF";
    year.style.backgroundColor = "#FFFFFF";
}

function showyearpricing(e) {
    var year = document.getElementById('yearly');
    var month = document.getElementById('monthly');
    var semi_year = document.getElementById('semi_yearly');
    var price2 = document.getElementById("price_box2")
    var price3 = document.getElementById("price_box3");
    price2.textContent = "19";
    price3.textContent = "65";

    year.style.backgroundColor = "#465DEF";
    month.style.backgroundColor = "#FFFFFF";
    semi_year.style.backgroundColor = "#FFFFFF";
}

month.addEventListener('click', showmonthpricing);
semi_year.addEventListener('click', showsemiyearpricing);
year.addEventListener('click', showyearpricing);

var acc = document.getElementsByClassName('accordian');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function (e) {
        var panel = this.nextElementSibling;
        var target = e.currentTarget;
        target.style.backgroundColor = "#FFFFFF";
        target.style.borderBottom = "1px solid white"
        panel.style.border = "1px solid Gray"
        panel.style.borderTop = "1px solid white"
        // var span = document.getElementsByClassName('float_r');
        e.target.children[1].classList.toggle("display");
        console.log(e.target.children)
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
}