angular.module('starter.controllers', ['ngCordova'])
// angular.module('PlatformApp', ['ionic'])

.controller('HomeCtrl', function($scope, $rootScope, pictures) {
  $scope.pictures = pictures.all();
   $rootScope.headphoto = "img/unlogin.jpg";
   $rootScope.custName = "点我登录";

})

.controller('RecommendCtrl', function($scope, recommends) {
  $scope.recommends = recommends.all();

})

/*.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})*/

.controller('LoginCtrl', function($scope, $rootScope, $cordovaDevice, $location, $ionicPopup) {
      $scope.login = function(user) {
         if(typeof(user)=='undefined'){
            $scope.showAlert('请检查输入用户名和密码');  
            return false;
          }
         // document.addEventListener("deviceready", function () {
         //   var uuid = $cordovaDevice.getUUID();
         // }, false);
          // var uuid = '12345678';
          // console.log(uuid);
          var password = user.password;
          var device = ionic.Platform.device();
          // var currentPlatform = ionic.Platform.platform();
          if(ionic.Platform.isIPad()){
            var deviceType = 'pad';
          }else{
            var deviceType = 'phone';
          }

        var data={'head':{'action': 'appLogin'},'body':{'custCode': user.username, 
        'inputPass': '103E702E0737327C' ,'deviceType': deviceType,'uuid': '8c7967024c88','systemType': deviceType}}
            $.ajax({
              type:"post",
              url:"http://112.84.178.88:9292/interface",
              async:false,
              data:JSON.stringify(data),
              dataType: "json",
              success:function(res){
                // $("#res").html(res);
                // console.log(res);
                // $scope.showAlert(res.head.reason);
                // $location.path('^')
                 // $rootScope.custCode = "点我登录";
                 if(res.head.reason=="登录成功!"){
                    $rootScope.headphoto = res.body.userPhoto;
                    $rootScope.custCode = "欢迎";
                    $rootScope.custName = res.body.custName;
                    $location.path('/tab/account');
                  }else{
                    $scope.showAlert(res.head.reason);
                  }
              },
              error:function(res){
                console.log(res);
              }
            });



             
        // if(user.username=='abc' && user.password=='123'){
        //   // $location.path('/app/tab-home');
        //      $scope.showAlert(data); 

        // }else{
        //   // $scope.showAlert(data.custCode);  
        //         // $location.path('tab//account/login');
        //         // $state.go('^');
        // }
      }
      $scope.showAlert = function(msg) {
         var alertPopup = $ionicPopup.alert({
         title: 'Warning Message',
         template: msg
         });
      };
  //$scope.chat = Chats.get($stateParams.chatId);
})
/*
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
*/