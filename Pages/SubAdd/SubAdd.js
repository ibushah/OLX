
// ******************VARIABLES****************

let title = document.getElementById("titleIn");
let type = document.getElementById("typeIn");
let desc = document.getElementById("textareaIn");
let price = document.getElementById("priceIn");
let address = document.getElementById("addressIn");
let submit = document.getElementById("submit");
var e = document.getElementById("select");
let pic1 = document.getElementById('pic1');
let uid = "";









// ************************Events*******************

submit.addEventListener("click", submitFunc);



// **********************FUNCTIONS********************

function select(a) {
    cat = a;
}


function submitFunc() {
    let file = document.getElementById("pic1").files[0];
    let cat = e.options[e.selectedIndex].text;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            person = user.uid;
            console.log(user)


            // console.log(cat)
            // console.log(file.name)
            let obj = {
                cat,
                person,
                name,
                title: title.value,
                type: type.value,
                desc: desc.value,
                price: price.value,
                address: address.value

            }
            console.log(obj)
            console.log(file.name)


            console.log(obj)
            let store = firebase.storage().ref(`Adds/${file.name}`);
            store.put(file)
                .then((url) => {
                    url.ref.getDownloadURL()
                        .then((urlRef) => {
                            // data.url = urlRef;
                            obj.url = urlRef;
                            console.log("url ref", urlRef)

                            firebase.database().ref(`Adds/${cat}`).push(obj)
                                .then(() => {
                                    // load.style.display = "none";

                                    // swal("profile Signed Up!", {
                                    //     icon: "success",
                                    // })
                                    //     .then(() => {
                                    //         location = "../pages/login.html";
                                    //     });

                                    console.log("ADD SUBMITTED")

                                    // })

                                })
                        })
                })


        } else {
            // No user is signed in.
            console.log("not clhjhn")
        }
    });
}


pic1.onchange = function (e) {
    // fire the upload here


    let btn = document.getElementById("btn1");
    btn.style.border = "3px solid white";
    console.log(btn)


};