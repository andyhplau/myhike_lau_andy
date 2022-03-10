function read_display_quote() {
    // get into the right collection
    db.collection("quotes").doc("tuesday")
        .onSnapshot(tuesdayDoc => {
            console.log(tuesdayDoc.data())
            document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote
        })
}

read_display_quote()

function insertname() {
    // to check if the user is logged in
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid) // let me to know who is the user that logged in to get the UID
            currentUser = db.collection("users").doc(user.uid) // will go to the firestore and
            currentUser.get().then(userDoc => {
                // get the user name
                var user_name = userDoc.data().name
                console.log(user_name)
                document.getElementById("name-goes-here").innerText = user_name
            })
        }
    })
}

insertname()