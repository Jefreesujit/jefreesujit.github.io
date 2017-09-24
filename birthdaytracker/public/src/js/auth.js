var config = {
  apiKey: "AIzaSyC5iA98uKjVsIQfYR6yjGHJxX9ogX9wLUI",
  authDomain: "birthday-tracker-c31a3.firebaseapp.com",
  databaseURL: "https://birthday-tracker-c31a3.firebaseio.com",
  storageBucket: "birthday-tracker-c31a3.appspot.com",
  messagingSenderId: "996953243377"
};
firebase.initializeApp(config);

var currentUser = firebase.auth().currentUser;
let firstTime = true;

function start() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      currentUser = user;
      console.log('authorized change');

      if (currentUser != null) {
        currentUser.providerData.forEach(function (profile) {
          sessionStorage.setItem('userData', JSON.stringify(profile));
          getUserDetails(profile);
        });
      }
    } else if (firstTime) {
      console.log('unauthorized change');
      firstTime = false;
      $('#modalOverlay').removeClass('hide');
    }
  });
}

function getUserDetails (profile) {
  var userRef = firebase.database().ref(profile.uid),
      userDataRef = firebase.database().ref(profile.uid + '/userData/');

  userRef.once('value', function(snapshot) {
    if (snapshot.hasChild('userData')) {
      console.log('userdata already exists');
    } else {
      userDataRef.push(profile);
    }
  });
}

function signInUser () {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
    var token = result.credential.accessToken;
    currentUser = result.user;
  });
}

function signOut () {
  firebase.auth().signOut().then(function() {
    return 'Sign-out successful.';
  }, function(error) {
    return 'An error happened.';
  });
};

window.onload = start;
// window.onunload = signOut;
