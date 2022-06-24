function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no"; // IE
}
function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes"; // IE
}
function modalSign(){
    const modal = document.querySelector('#modal');
    modal.style.display = 'block';
    unloadScrollBars();
}
function modalClose(){
    const modal = document.querySelector('#modal');
    modal.style.display = 'none';
    reloadScrollBars();
}
// function logSite(){
//     // alert(document.querySelector('#nome').value);
    
//     var senha = document.querySelector('#pass').value;
//     var user = document.querySelector('#nome').value;
    
// }