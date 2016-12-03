var shouldUpdateList = true;

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function getFormValues () {
  let firstname = $('#first_name').val(),
    lastname = $('#last_name').val(),
    gender = $('input[name="gender"]:checked').val(),
    dateofbirth = $('#dob').val();

  return {
    id: guid(),
    firstName: firstname,
    lastName: lastname,
    gender: gender,
    dateOfBirth: dateofbirth
  }
}

function resetFormValues () {
  $('#first_name').val(null);
  $('#last_name').val(null);
  $('#dob').val('');
  $('input[name="gender"]').prop('checked', false);
}

function saveBirthdayDetails () {
  var formDetails = getFormValues(),
      birthdayListRef = firebase.database().ref("githubBirthdayList/");

  shouldUpdateList = false;
  birthdayListRef.push(formDetails);
  resetFormValues();
}

function retrieveBirthdayList () {
  shouldUpdateList = true;
  let ref = firebase.database().ref('githubBirthdayList/'),
      month = parseInt($('#month_list').val()),
      BirthdayList = [],
      modifiedList = [],
      keys = [],
      dataList,
      dob;

  ref.on("value", function(snapshot) {
    dataList = snapshot.val();
    if (shouldUpdateList === true) {
      for (var k in dataList) {
        BirthdayList.push(dataList[k]);
      }

      modifiedList = BirthdayList.filter(function (record) {
        dob = new Date(record.dateOfBirth);
        if (dob.getMonth() === month) {
          return record;
        }
      });
      displayList(modifiedList);
    }
  }, function (error) {
     console.log("Error: " + error.code);
  });
}

function displayList(List) {
  let i,
      displayCards = '',
      displayHTML = '';

  for (i = 0; i < List.length; i++) {
    displayCards += '<li class="collection-item avatar">'+
      '<i class="material-icons circle teal"></i>'+
      '<span class="title">'+List[i].firstName+' '+List[i].lastName+'</span>'+
      '<p>'+List[i].dateOfBirth+'</p>'+
      '</li>';
  }
  displayHTML = List.length > 0 ? '<ul class="collection">'+displayCards+'</ul>' : '';
  $('#birthday_list').html(displayHTML);
}

$(document).ready(function() {
    $('select').material_select();

    var date = new Date();
    // date = new Date(date.getFullYear()-18,date.getMonth(),date.getDate());
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15,
      max: date
    });

    retrieveBirthdayList();

    $('#save_btn').on('click', function(e) {
      e.preventDefault();
      saveBirthdayDetails();
      return false;
    });

    $('#month_list').on('change', function() {
      retrieveBirthdayList();
    });
});


