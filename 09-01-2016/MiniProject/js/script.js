var app = angular.module('demoApp',['ngRoute']);
var app2 = angular.module('demoApp2',['ngRoute']);
app2.config(function ($routeProvider) {
$routeProvider
   .when("/Add_Visitor", {
      templateUrl: "partials/visitorRegister.html",
	  controller: "visitorCtrl"
   })
   .when("/View_Visitor", {
      templateUrl: "partials/viewRegister.html",
	  controller: "viewCtrl"
   })
   .when("/Add_Receptionist", {
      templateUrl: "partials/addReceptionist.html",
	  controller: "recepCtrl"
   })
   .when("/View_Receptionist", {
      templateUrl: "partials/viewReceptionist.html",
	  controller: "recepCtrl"
   });
});

app.service("Alert_Service", function() {
    var message = "Wrong credential,try again";
	this.serv = function() {
	   return message;
	}
});

app.controller('myCtrl', function($scope,$location,$http,Alert_Service) {
	  
   $scope.login= function(){
         var request = $http({method: "post",url: "php/login.php",
                       data: {
                                email: $scope.email,
                                pass: $scope.password
                       },
                       headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
         });
         request.success(function (data) {
            if (data == $scope.email)
            {			
               window.location = "index.html";
			   sessionStorage.setItem("username", data);
			}
            else
			{
               alert(Alert_Service.serv());
			}
         });
   }  
});

app2.controller('visitorCtrl',function($scope,$http) {
   
   $scope.visitorFunc = function() {
      var vInTime = document.getElementById("inTime").value;
	  var vOutTime = document.getElementById("outTime").value;
	  
	  var request = $http({method: "post",url: "php/visitor.php",
                     data: {
                               vname: $scope.visitorName,
							   email: $scope.visitorEmail,
                               phoneNo: $scope.phoneNo,
							   intime: vInTime,
							   outtime: vOutTime,
							   username: username
                     },
                     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
       });
       request.success(function (data) {
          if (data == "0") 
		  {
             alert("inserted successfully")
			 $scope.visitorName = "";
			 $scope.visitorEmail = "";
             $scope.phoneNo = "";
			 $scope.inTime = "";
		     $scope.outTime = "";
		  }
          else
		  {
             alert('Wrong credential,try again');
		  }
       });
   }
});

app2.controller('recepCtrl',function($scope,$http) {

   $scope.confirmPass = function() {
      if($scope.recPwd == $scope.recPwdc)
	  {
	     document.getElementById("msg").style.color = "green";
         document.getElementById("msg").innerHTML = "Password Confirmed!!";	  
	  }
	  else
	  {
	     document.getElementById("msg").style.color = "red";
	     document.getElementById("msg").innerHTML = "Password does not match!!";
	  }
   }
   
   $scope.recepFunc = function() {
      if($scope.recPwd == $scope.recPwdc)
	  {
      var request = $http({method: "post",url: "php/receptionists.php",
                     data: {
                               name: $scope.recName,
							   email: $scope.recEmail,
							   phoneNo: $scope.phoneNo,
							   userNm: $scope.recUserName,
                               pass: $scope.recPwd
                     },
                     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
       });
       request.success(function (data) {
          mydata = data.slice(0,1);
		  if (mydata == "0") 
		  {
             alert("inserted successfully");
			 $scope.recName = "";
			 $scope.recEmail = "";
			 $scope.phoneNo = "";
			 $scope.recUserName = "";
             $scope.recPwd = "";
			 $scope.recPwdc = "";
			 document.getElementById("msg").innerHTML = "";
		  }
          else
		  {
             alert('Wrong credential,try again');
		  }
       });
       }
       else
       {
	      alert("Password does not match!!");
	   }	   
   }
   
   $scope.viewRecep = function() {
      
	  var request = $http({method: "post",url: "php/viewReceptionist.php",
                     
                     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
       });
       request.success(function (data) {
          if (data != "") { 
             //alert("Retrieve successfully")
			 $scope.recepInfo=data;			 
		  }
          else {
             alert('Wrong credential,try again');
		  }
       });
   }
   
   $scope.editRecep = function() {
      var request = $http({method: "post",url: "php/editRecep.php",
                     data: {
					    id: this.x.rec_id,
					    name: this.x.full_name,
						email: this.x.email,
						phoneno: this.x.phoneno,
						username: this.x.username,
						pass: this.x.password
					 },
                     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
       });
       request.success(function (data) {
          if (data == 0) { 
             alert("Updated successfully")
	         document.getElementById("flname").disabled=true;
			 document.getElementById("mail").disabled=true;
			 document.getElementById("pno").disabled=true;
			 document.getElementById("usrname").disabled=true;
			 document.getElementById("pwd").disabled=true;
			 location.reload();			 
		  }
          else {
             alert('Wrong credential,try again');
		  }
       });
   }
   
   $scope.delRec = function(rid) {
      var request = $http({method: "post",url: "php/deleteReceptionist.php",
                    data: {
					   id: rid
					},
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
       });
       request.success(function (data) {
          if (data == 0) { 
             alert("Data deleted successfully")	
			 location.reload();
		  }
          else {
             alert('Cannot delete data. Try again!');
		  }
       });
   }
});

app2.controller('viewCtrl',function($scope,$http) {
   
   $scope.viewFunc = function() {
      
	  var request = $http({method: "post",url: "php/viewRegister.php",
                     data: {
						username: username
					 },
                     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
       });
       request.success(function (data) {
          if (data != "") { 
             //alert("Retrieve successfully")
			 if(username == "admin") {
			    $scope.showAdd=true;
			 }
			 $scope.records=data;
			 
		  }
          else {
             alert('Wrong credential,try again');
		  }
       });
   }
   
   $scope.editVisitor = function() {
      var request = $http({method: "post",url: "php/editVisitor.php",
                     data: {
					    id: this.x.sr_no,
					    name: this.x.visitor_name,
						email: this.x.email,
						phoneno: this.x.phoneno,
						inTime: this.x.inTime,
						outTime: this.x.outTime
					 },
                     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
       });
       request.success(function (data) {
          if (data == 0) { 
             alert("Updated successfully")
	         document.getElementById("vname").disabled=true;
			 document.getElementById("mail").disabled=true;
			 document.getElementById("pno").disabled=true;
			 document.getElementById("itime").disabled=true;
			 document.getElementById("otime").disabled=true;
			 location.reload();
		  }
          else {
             alert('Wrong credential,try again');
		  }
       });
   }
   $scope.delVis = function(vid) {
      var request = $http({method: "post",url: "php/deleteVisitor.php",
                    data: {
					   id: vid
					},
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
       });
       request.success(function (data) {
          if (data == 0) { 
             alert("Data deleted successfully")				 
			 location.reload();
		  }
          else {
             alert('Cannot delete data. Try again!');
		  }
       });
   }
});

app2.controller('mainCtrl',function($scope,$http,$location) {

   username = sessionStorage.getItem("username"); 
   document.getElementById("uname").innerHTML = username;  
   if(username == "admin")
   {
      $scope.showRecep = true;
   }   
   
   $scope.logout = function() {
      sessionStorage.clear();
	  window.location = "login.html";
   }   
});