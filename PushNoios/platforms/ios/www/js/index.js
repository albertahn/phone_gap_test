/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //window.FirebasePlugin.grantPermission();

        var push = PushNotification.init({
	android: {
	},
    browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    },
	ios: {
		alert: "true",
		badge: "true",
		sound: "true"
	},
	windows: {}
});

push.on('registration', function(data) {
	// data.registrationId

  navigator.notification.alert(
      ' data.registrationId: '+ data.registrationId,  // message
      alertDismissed,         // callback
      'YOu got albert registration!!!',            // title
      'Done'                  // buttonName
  );//noti alert
});

push.on('notification', function(data) {
	// data.message,
	// data.title,
	// data.count,
	// data.sound,
	// data.image,
	// data.additionalData
console.log("data:"+data);
  navigator.notification.alert(
      ' data.registrationId: '+data,  // message
      alertDismissed,         // callback
      'YOu got token!!!',            // title
      'Done'                  // buttonName
  );//noti alert

});

push.on('error', function(e) {
  navigator.notification.alert(
      ' e.message: '+e.message,  // message
      alertDismissed,         // callback
      'YOu got token!!!',            // title
      'Done'                  // buttonName
  );//noti alert
	// e.message
});
/*
        window.FirebasePlugin.getToken(function(token) {
            // save this server-side and use it to push notifications to this device
            console.log(token);

            navigator.notification.alert(
                'albert YOu got token!!!'+token,  // message
                alertDismissed,         // callback
                'YOu got token!!!',            // title
                'Done'                  // buttonName
            );



        }, function(error) {
            console.error(error);
        });

        window.FirebasePlugin.logEvent("select_content", {content_type: "page_view", item_id: "home"});

        window.FirebasePlugin.setScreenName("Home");
        window.FirebasePlugin.setUserId("albert_id");

        window.FirebasePlugin.onTokenRefresh(function(token) {
            // save this server-side and use it to push notifications to this device
            console.log(token);

            navigator.notification.alert(
                'YOu got onTokenRefresh token!!!',  // message
                alertDismissed,         // callback
                'YOu got onTokenRefresh!!!',            // title
                'Done'                  // buttonName
            );

        }, function(error) {
            console.error(error);
        });

        window.FirebasePlugin.onNotificationOpen(function(notification) {
            console.log(notification);

            navigator.notification.alert(
                'YOu got notification!!!',  // message
                alertDismissed,         // callback
                'YOu got notification!!!',            // title
                'Done'                  // buttonName
            );

        }, function(error) {
            console.error(error);
        });

        window.FirebasePlugin.hasPermission(function(data){
            console.log(data.isEnabled);
            navigator.notification.alert(
                'YOu got permision!!!',  // message
                alertDismissed,         // callback
                'YOu got permision!!!',            // title
                'Done'                  // buttonName
            );
        });

        FCMPlugin.getToken(function(token){
            //alert(token);

            navigator.notification.alert(
                token+'You are the winner!',  // message
                        alertDismissed,         // callback
                        'Game Over',            // title
                        'Done'                  // buttonName
                    );
        });

        FCMPlugin.onNotification(function(data){
            if(data.wasTapped){
              //Notification was received on device tray and tapped by the user.
              navigator.notification.alert(
            'onNotification!',  // message
            alertDismissed,         // callback
            'onNotification',            // title
            'Done'                  // buttonName
        );
            }else{
              //Notification was received in foreground. Maybe the user needs to be notified.
              // alert(JSON.stringify(data));
            }
          });
*/
        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );

        // alert dialog dismissed
        function alertDismissed() {
            // do something
        }
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


app.initialize();
