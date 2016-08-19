function MailsController($scope, $state, $http) {
    var ctrl = this;
    ctrl.uiRouterState = $state;

    $http.get('/js/mails/mails.json').success(function (data) {
      ctrl.mails = data;
    });

  $http.get('/js/mails/sentMails.json').success(function (data) {
    ctrl.sentMails = data;
  });

    ctrl.showBlankMail = false;
    ctrl.createMail = function () {
        ctrl.showBlankMail = true;
        ctrl.newMail = {};
    };

    ctrl.saveMail = function (newMail) {
        $http.post('/js/mails/sentMails.json', JSON.stringify(newMail), {'Content-Type': 'application/json'}).success(function (data) {
          ctrl.sentMails = data;
        });
        ctrl.showBlankMail = false;
    };

    ctrl.cancelMail = function () {
        ctrl.newMail = {};
        ctrl.showBlankMail = false;
    };

    ctrl.deleteMail = function () {
        var newArr = ctrl.mails.filter(function (item) {
           if (item.checked !== true) {
               return item;
           }
        });
        ctrl.mails = newArr;
    };

    ctrl.showDetails = function (mail) {
        !mail.detail ? mail.detail = true : mail.detail = false;
    }
}

angular.module('mails')
    .component('mails', {
            templateUrl: 'js/mails/mails.html',
            controller: MailsController
});