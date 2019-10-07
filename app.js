var config = {
    apiKey: "AIzaSyCk2uqfJTHM3emKfJeZu-g8_xqvxJVOA8U",
    authDomain: "friendlychat-1d5ae.firebaseapp.com",
    databaseURL: "https://friendlychat-1d5ae.firebaseio.com",
    projectId: "friendlychat-1d5ae",
    storageBucket: "friendlychat-1d5ae.appspot.com",
    messagingSenderId: "729463011972",
    appId: "1:729463011972:web:c2749e4fe687e9cf"
  }; 
  firebase.initializeApp(config);
  var db = firebase.firestore();
  /*adding data
  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
*/
// reading data

db.collection("cake").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
             const a=doc.data();
             
             //var countup = this;
            var newNode = document.createElement('div' );
           newNode.className = 'col-md-3 text-center filter '+ a.summery;
            /*  newNode.innerHTML ='<div class="card"><br><img src="'+a.imgurl+'" class="mx-auto d-block"  width="90%" height="150px" ><br>'+ a.pid+'  <strong>Rs.'+a.price+'</strong> <br> <button class="btn btn-danger my-cart-btn" data-id="'+a.pid+'" data-name="'+a.summery+'" data-summary="'+a.summery+'" data-price="'+a.price+'" data-quantity="1" data-image="'+a.imgurl+'">Add to Cart</button></div>';
            */
pid=doc.id
            newNode.innerHTML ='<div class="panel panel-primary"><div class="panel-heading">'+a.summery+'</div><div class="panel-body"><img src="'+a.imgurl+'"  style="width:100%"  height="125px" alt="Image"><br><button type="button" class="btn btn-info btn-xs" data-toggle="modal" data-price1="'+a.price+'" data-remark="'+a.remark+'"  data-whatever="'+a.summery+'" data-target="#exampleModal">Details</button>Rs.-'+a.price+'</div><div class="panel-footer">'+
            ' <button type="button" class="btn btn-info btn-xs" data-toggle="modal" '+
' data-id="'+a.id+'" '+
' data-name="'+ a.pname+'"'+
 ' data-price1="'+a.price+'"'+
 ' data-pdetails="'+a.details+'"'+  
 ' data-whatever="'+a.summery+'"'+
 'data-wt="'+a.wt+'"'+
  'data-fl="'+a.Flavour+'"'+
 '  data-target="#myModal2">Add to Cart2</button>'+
 ' </div></div></div>';
            document.getElementById('dd').appendChild(newNode); 
          
    }


    );
});

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();
function clickfnk(){
  //alert("select flever, weight and shap");
  
  $("#myModal2").modal('show');
}

 function datas(){
           
          
            
        }
    