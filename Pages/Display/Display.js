// *********************VARIABLE***************


let wrap = document.getElementById("wrap");



// *********************EVENT LISTENER****************

window.addEventListener("load", loadData);


// ***************************FUNCTION***************


function loadData() {
    let obj = JSON.parse(localStorage.getItem("Ad"));
    console.log(obj)
    wrap.style.display="none"

    firebase.database().ref('Adds/' + obj.cat).child(obj.id).once("value", (snap) => {
        console.log(snap.val())
        let ad = snap.val();
        wrap.style.display="block";

        wrap.innerHTML = `  <div class="col s12 m12 l12 ">
        <div class="wrap">
            <div class="row">
                <div class="col l6 m6 s12">
                    <div class="imgWrap">
                        <img id="pic" src='${ad.url}'>
                    </div>

                </div>
                <div class="col l6 m6 s12">
                    <div class="dataWrap">

                        <h3 class="head">${ad.price}</h3>
                        <h5>${ad.title}</h5>
                    </div>
                    <div class="chatWrap">
                        <div class="below">
                            <h4 class="head">SELLER DESCRIPTION</h4>

                            <h5 class="head"><i class="icon material-icons">face</i>Ibrahim Shah</h5>
                            <button  class="btn chat hoverable">CHAT</button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col s12 l12 m12 ">

            <div class="descr">
                <h3>DESCRIPTION</h3>
                <p class="flow-text" style="padding:5px; text-align:center">${ad.desc} </p>

            </div>
        </div>
    </div>`;
    })

}