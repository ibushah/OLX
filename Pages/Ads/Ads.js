// ******************VARIABLES****************

// let cat = e.options[e.selectedIndex].text;

let wrap = document.getElementById("adds");
let arr = [];


// ************************Events*******************


window.addEventListener("load", loadData)


// **********************FUNCTIONS********************


function loadData() {
    firebase.database().ref('Adds/').once("value", (snap) => {

        let a = snap.val();
        console.log(a);

        for (var key in a) {

            // console.log(a[key])
            // arr.push(a[key]);

            for(var k2 in a[key])
            {
                console.log(a[key][k2])
                a[key][k2].adKey=k2;
                arr.push(a[key][k2])
            }



        }
        console.log(arr)
      
        wrap.innerHTML = arr.map((v) => {

           return data(v.desc, v.url, v.title,v.adKey,v.cat);
        }).join("\n");
    })
}


function data(desc, url, title,key,cat) {
    
    return (

        ` <div class="col sm12  m4 l4">
        <div class="door">
            <div class="card z-depth-4">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator cardImg"  src="${url}">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${title}<i
                            class="material-icons right">more_vert</i></span>
                    <p><button onClick="go('${key}','${cat}')" class="btn">Go to add</button></p>
                </div>
                
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${cat}
                    <i class="material-icons right">close</i></span>
                    <p>${desc}</p>
                </div>
            </div>
        </div>
        </div>`
    )
}


function go(id,cat) {
    console.log(id)
    let obj=
    {
        cat,
        id
    }
    localStorage.setItem("Ad",JSON.stringify(obj));
    location.assign("../Display/Display.html");
    
}