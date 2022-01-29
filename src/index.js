// function getDownloadApi(event) {
//     debugger;

//     fetch(`https://soundmint-public.s3.amazonaws.com/KLOUD_REVEALED/meta/${id}`).then(resp => {
//     }).catch(_ => {
//         new Snackbar({
//             message: "Impossible to fetch that ID."
//         });
//     });
// }

document.querySelector("#input").addEventListener("submit", function(e){
    debugger;
    if(!isValid){
        e.preventDefault();    //stop form from submitting
    }
});