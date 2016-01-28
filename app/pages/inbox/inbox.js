import {Page} from 'ionic/ionic';
import {Modal, Platform, NavController, Alert, ViewController, NavParams, IonicApp} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/inbox/inbox.html',
})


export class PageInbox {
  constructor(nav: NavController, app: IonicApp, platform: Platform) {
    this.nav = nav;
    this.platform = platform;
    this.app = app;
    this.messageGroups = [
      {
        title: 'today',
        messages: [
          {
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          },
          {
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          },
          {
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          },
          {
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          },{
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          },{
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          },{
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          },{
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          }
        ]
      },
      {
        title: 'yesterday',
        messages: [
          {
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          },
          {
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          },{
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          },{
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          }
        ]
      },
      {
        title: 'Snoozed',
        messages: [
          {
            name: 'Gollum',
            title: 'The message title',
            image: 'images/yuna.jpg',
            message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
          }
        ]
      }
    ];
  }

  presentContactModal() {
    let contactModal = Modal.create(ContactUs);
    this.nav.present(contactModal);
  }

  openModal(message) {
    let modal = Modal.create(MyModal, {message: message});
    this.nav.present(modal)
  }

  showToast(message) {
    this.platform.ready().then(() => {
      if (window.plugins && window.plugins.toast){
        window.plugins.toast.show(message, "short", 'bottom');
      }
    });
  }

  clearAllGroup(group) {
    group.messages = [];
  }

  presentPrompt(item, group) {
    debugger;
    this.app.getComponent('data-list').closeSlidingItems();
    let alert = Alert.create({
      title: 'Snooze',
      inputs: [
        {
          name: 'snoozeTime',
          placeholder: 'Days to snooze',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Confirm',
        handler: data => {
          setTimeout(() => {
            this.showToast('Message Snoozed');
            this.addToSnooze(item);
            for (var i = 0; i < group.messages.length; i++) {
              if (group.messages[i] === item) {
                group.messages.splice(i, 1);
                return;
              }
            }
          }, 300);
        }
      }
    ]
    });

    this.nav.present(alert);
  }
  removeItem(item, group) {
    for (var i = 0; i < group.messages.length; i++) {
      if (group.messages[i] === item) {
        group.messages.splice(i, 1);
        this.showToast('Message Removed');
        return;
      }
    }
  }

  addToSnooze(item) {
    for (var i = 0; i < this.messageGroups.length; i++) {
      if (this.messageGroups[i].title === 'Snoozed') {
        this.messageGroups[i].messages.push(item);
      }
    }
  }
}

@Page({
  templateUrl: 'build/pages/inbox/modal-content.html',
})

class MyModal {
  constructor(viewCtrl: ViewController,  params: NavParams, platform: Platform) {
    if(platform.is('android'){
      this.currentPlatform = 'android'
    }
    this.currentPlatform = 'android'
    this.message = params.data.message;
    this.dismissModal = function () {
      viewCtrl.dismiss();
    }
  }
}