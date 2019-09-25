// read data from friendlychat- cake






// following function for uploading files
fn1.addEventListener('change', function(e) {

    for (let i = 0; i < e.target.files.length; i++) {
        let imageFile = e.target.files[i];
        let storageRef = firebase.storage().ref("img/" + imageFile.name);
        let task = storageRef.put(imageFile);

        task.on('state_changed', function progress(snapshot) { 
                let pct = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                console.log("Upload is " + pct + "% Done")

                if (pct == 100) {
                    console.log("Upload is over " + "img/" + imageFile.name);
                };


            }, function(error) {
                // Handle unsuccessful uploads
            }, function() {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('File available at', downloadURL);
                });
            }



        );

    }

});


fn2.addEventListener('click', function(e) {

    storageRef.child("img/website wall.jpg").getDownloadURL().then(function(url) {
        alert("Slide1");
        console.log("Slide1-" + url);
    });
});
