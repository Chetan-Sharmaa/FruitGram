blankArr = [];

function signSubBtn() {
  let username = document.getElementById("signUsername").value;
  let emailSign = document.getElementById("signEmail").value;
  let passwordSign = document.getElementById("signPassword").value;
  let phoneNum = document.getElementById("phone").value;

  //function for email validation
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  var checkEmail = validateEmail(emailSign);

  if (username == "") {
    document.getElementById("validName").innerHTML = `plz enter user name`
  } else {
    document.getElementById("validName").innerHTML = ``
  }//signUp page user name validation

  if (emailSign == "" || checkEmail == false) {
    document.getElementById("validEmail").innerHTML = `plz enter valid email`
  } else {
    document.getElementById("validEmail").innerHTML = ``
  }//signUp page email validation

  if (passwordSign == "") {
    document.getElementById("validPassword").innerHTML = `plz enter password`
  } else {
    document.getElementById("validPassword").innerHTML = ``
  }//signUp page password validation

  if (isNaN(phoneNum) || phoneNum < 6200000000 || phoneNum > 9999999999) {
    document.getElementById("validPhone").innerHTML = `plz enter valid phone no.`
  } else {
    document.getElementById("validPhone").innerHTML = ``
  }//signUp page phone number validation




  //aproving account after check it's valid or not
  if (username == "" || emailSign == "" || checkEmail == false || passwordSign == "" || isNaN(phoneNum) || phoneNum < 6200000000 || phoneNum > 9999999999) {
    alert("plzz make sure u fill information properly")
  } else if ("userInfo" in localStorage) {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));

    for (var c = 0; c < userInfo.length; c++) {
      var check = userInfo[c].name;
      blankArr.push(check);
    }
    var result = blankArr.includes(username);
    if (result == true) {
      document.getElementById("validName").innerHTML = `This username has been already taken`
    } else {
      userInfo.push({
        signIx: userInfo.length + 1,
        name: username,
        email: emailSign,
        password: passwordSign,
        mobile: phoneNum
      });
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      // console.log(userInfo)
      document.getElementById("signbtn").disabled = true;
      document.getElementById("already").innerHTML = `account created successfuly,click here <a href="./login.html" target="_blank">Log In</a>`
    }
  } else {
    let userInformation = [{
      signIx: 1,
      name: username,
      email: emailSign,
      password: passwordSign,
      mobile: phoneNum
    }];
    localStorage.setItem("userInfo", JSON.stringify(userInformation));
    document.getElementById("signbtn").disabled = true;
    document.getElementById("already").innerHTML = `account created successfuly,click here <a href="./login.html" target="_blank">Log In</a>`
  }
}//sign up submit button function

//********************************log-in account****************************************/



function logSubBtn() {

  let userInfoLog = JSON.parse(localStorage.getItem('userInfo'));

  let ipUsername = document.getElementById("logInUsername").value;
  let ipPassword = document.getElementById("password").value;
  // console.log(ipUsername);
  // console.log(ipPassword);

  if ("userInfo" in localStorage) {
    for (var c = 0; c < userInfoLog.length; c++) {
      var nameLog = userInfoLog[c].name;
      var passwordLog = userInfoLog[c].password;
      blankArr.push(nameLog);
    }
    var checkName = blankArr.includes(ipUsername)
    if (checkName == false) {
      // alert("no account found related this username")
      document.getElementById("incorrectuser").innerHTML = `no account found related this username`
    } else {
      for (let i = 0; i < userInfoLog.length; i += 1) {
        if (userInfoLog[i].name === ipUsername) {
          var verifyPassword = userInfoLog[i].password;
          document.getElementById("incorrectuser").innerHTML = ``
          if (verifyPassword === ipPassword) {
            location.replace("index.html")
            document.getElementById("incorrectPassword").innerHTML = ``
          } else {
            // alert("incorrect password")
            document.getElementById("incorrectPassword").innerHTML = `incorrect password`
          }
        }
      }
    }

  } else {
    document.getElementById("incorrectuser").innerHTML = `no account found related this username`
  }
}//Log in submit button function



//*******************************Home page*********************************************** */



blankArr = [];
userArr = [];
//********************************sign-up account****************************************/
function signSubBtn() {
  let username = document.getElementById("signUsername").value;
  let emailSign = document.getElementById("signEmail").value;
  let passwordSign = document.getElementById("signPassword").value;
  let phoneNum = document.getElementById("phone").value;

  //function for email validation
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  var checkEmail = validateEmail(emailSign);

  if (username == "") {
    document.getElementById("validName").innerHTML = `plz enter user name`
  } else {
    document.getElementById("validName").innerHTML = ``
  }//signUp page user name validation

  if (emailSign == "" || checkEmail == false) {
    document.getElementById("validEmail").innerHTML = `plz enter valid email`
  } else {
    document.getElementById("validEmail").innerHTML = ``
  }//signUp page email validation

  if (passwordSign == "") {
    document.getElementById("validPassword").innerHTML = `plz enter password`
  } else {
    document.getElementById("validPassword").innerHTML = ``
  }//signUp page password validation

  if (isNaN(phoneNum) || phoneNum < 6200000000 || phoneNum > 9999999999) {
    document.getElementById("validPhone").innerHTML = `plz enter valid phone no.`
  } else {
    document.getElementById("validPhone").innerHTML = ``
  }//signUp page phone number validation

  //aproving account after check it's valid or not
  if (username == "" || emailSign == "" || checkEmail == false || passwordSign == "" || isNaN(phoneNum) || phoneNum < 6200000000 || phoneNum > 9999999999) {
    alert("plzz make sure u fill information properly")
  } else if ("userInfo" in localStorage) {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));

    for (var c = 0; c < userInfo.length; c++) {
      var check = userInfo[c].name;
      blankArr.push(check);
    }
    var result = blankArr.includes(username);
    if (result == true) {
      document.getElementById("validName").innerHTML = `This username has been already taken`
    } else {
      userInfo.push({
        signIx: userInfo.length + 1,
        name: username,
        email: emailSign,
        password: passwordSign,
        mobile: phoneNum
      });
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      document.getElementById("signbtn").disabled = true;
      document.getElementById("already").innerHTML = `account created successfuly,click here <a href="./login.html" target="_blank">Log In</a>`
    }
  } else {
    let userInformation = [{
      signIx: 1,
      name: username,
      email: emailSign,
      password: passwordSign,
      mobile: phoneNum
    }];
    localStorage.setItem("userInfo", JSON.stringify(userInformation));
    document.getElementById("signbtn").disabled = true;
    document.getElementById("already").innerHTML = `account created successfuly,click here <a href="./login.html" target="_blank">Log In</a>`
  }
}//sign up submit button function

//********************************log-in account****************************************/
function logSubBtn() {

  let userInfoLog = JSON.parse(localStorage.getItem('userInfo'));

  let ipUsername = document.getElementById("logInUsername").value;
  let ipPassword = document.getElementById("password").value;
  if ("userInfo" in localStorage) {
    for (var c = 0; c < userInfoLog.length; c++) {
      var nameLog = userInfoLog[c].name;
      var passwordLog = userInfoLog[c].password;
      blankArr.push(nameLog);
    }
    var checkName = blankArr.includes(ipUsername)
    if (checkName == false) {
      document.getElementById("incorrectuser").innerHTML = `no account found related this username`
    } else {
      for (let i = 0; i < userInfoLog.length; i += 1) {
        if (userInfoLog[i].name === ipUsername) {
          var verifyPassword = userInfoLog[i].password;
          document.getElementById("incorrectuser").innerHTML = ``
          if (verifyPassword === ipPassword) {
            location.replace("index.html")//log in to home page*****************>>>>>>>>>
            document.getElementById("incorrectPassword").innerHTML = ``//>>>>>>>>>>>>>>
            //<<<<<<<<<<<**********after log in into home page*****************>>>>>>>>>>>
            var loggedAccDetails = {
              name: ipUsername,
              password: ipPassword
            }
            localStorage.setItem("loggedAcc", JSON.stringify(loggedAccDetails));

          } else {
            document.getElementById("incorrectPassword").innerHTML = `incorrect password`
          }
        }
      }
    }

  } else {
    document.getElementById("incorrectuser").innerHTML = `no account found related this username`
  }
}//Log in submit button function



//*******************************Home page*********************************************** */



var index = 0;
var fruitsNameArr = [];
function addFruits() {
  index++
  let loged = JSON.parse(localStorage.getItem('loggedAcc'));
  var accName = loged.name;
  document.getElementById("acc").innerHTML = `${accName}`
  var ipFruitName = document.getElementById("ipFruits").value;

  if ("fruitsKey" in localStorage) {
    let fruitsKey = JSON.parse(localStorage.getItem('fruitsKey'));
    var match_index = -1;
    fruitsKey.forEach((element, i) => {
      if (element.priName == accName) {
        match_index = i;
        return
      }

    });
    alert(match_index)
    if (match_index >= 0) {
      fruitsKey[match_index].priArr.push(ipFruitName)
      localStorage.setItem("fruitsKey", JSON.stringify(fruitsKey));
    } else {
      fruitsKey.push({
        priName: loged.name,
        priArr: [ipFruitName]
      })
      localStorage.setItem("fruitsKey", JSON.stringify(fruitsKey));
      document.getElementById("fruitTable").innerHTML += `<tr>
    <th>${index}</th><th>${ipFruitName}</th></tr>`
    }
  } else {
    var data = [{
      priName: loged.name,
      priArr: [ipFruitName]
    }];
    localStorage.setItem("fruitsKey", JSON.stringify(data));
    document.getElementById("fruitTable").innerHTML += `<tr>
    <th>${index}</th><th>${ipFruitName}</th></tr>`
  }


  //***********************************************17:33**********************/
  var index = 0;
  var fruitsNameArr = [];
  function addFruits() {
    let loged = JSON.parse(localStorage.getItem('loggedAcc'));
    var accName = loged.name;
    document.getElementById("acc").innerHTML = `${accName}`
    var ipFruitName = document.getElementById("ipFruits").value;
    if (ipFruitName == "") {
      alert("plz enter something")
    } else {

      if ("fruitsKey" in localStorage) {
        let fruitsKey = JSON.parse(localStorage.getItem('fruitsKey'));
        var match_index = -1;
        fruitsKey.forEach((element, i) => {
          if (element.priName == accName) {
            match_index = i;
            return
          }

        });
        alert(match_index)
        if (match_index >= 0) {
          fruitsKey[match_index].priArr.push(ipFruitName)
          localStorage.setItem("fruitsKey", JSON.stringify(fruitsKey));
          show_data();
        } else {
          fruitsKey.push({
            priName: loged.name,
            priArr: [ipFruitName]
          })
          localStorage.setItem("fruitsKey", JSON.stringify(fruitsKey));
          document.getElementById("fruitTable").innerHTML += `<tr>
        <th>1</th><th>${ipFruitName}</th></tr>`

        }
      } else {
        var data = [{
          priName: loged.name,
          priArr: [ipFruitName]
        }];
        localStorage.setItem("fruitsKey", JSON.stringify(data));
        document.getElementById("fruitTable").innerHTML += `<tr>
    <th>1</th><th>${ipFruitName}</th></tr>`

      }
    }
  }

  function show_data() {
    let fruitsKey = JSON.parse(localStorage.getItem('fruitsKey'));
    let loggedData = JSON.parse(localStorage.getItem('loggedAcc'));
    let nameOfUser = loggedData.name;
    if ("fruitsKey" in localStorage) {
      document.getElementById("fruitTable").innerHTML = ``
      for (var x = 0; x < fruitsKey.length; x++) {
        var checking = fruitsKey[x].priName.includes(nameOfUser)
        if (checking == true) {
          for (var y = 0; y < fruitsKey[x].priArr.length; y++) {
            document.getElementById("fruitTable").innerHTML += `<tr>
          <th>${y + 1}</th><th>${fruitsKey[x].priArr[y]}</th></tr>`

          }

        }
      }

    }

  }
  show_data();