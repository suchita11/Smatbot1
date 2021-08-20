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

