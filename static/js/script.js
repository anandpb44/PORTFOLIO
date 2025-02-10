var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

// function select(event,tabname) {

//     for (tl of tablinks) {
//                 tl.classList.remove("active-link");
//         }
//     for (tb of tabcontents) {
//         tb.classList.remove("active-tab");
//         }

//     event.currentTarget.classList.add("active-link")
//     document.getElementById(tabname).classList.add(" active-tab")
// }

function select(event, tabname) {
    // Remove 'active' classes from all tabs and tab contents
    Array.from(tablinks).forEach(function(tl) {
        tl.classList.remove("active-link");
    });
    Array.from(tabcontents).forEach(function(tb) {
        tb.classList.remove("active-tab");
    });

    // Add 'active' classes to the selected tab and its content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



var sidemenu=document.getElementById('menubar');
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = " -200px ";
}