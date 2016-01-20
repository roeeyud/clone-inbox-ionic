import {Page} from 'ionic/ionic';
import {Modal, NavController, ViewController, NavParams} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/inbox/inbox.html',
})

export class PageInbox {
  constructor(nav: NavController) {
    this.nav = nav;
    this.todayMessages = [
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
    this.yesterdayMessages = [
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
  }

  presentContactModal() {
    let contactModal = Modal.create(ContactUs);
    this.nav.present(contactModal);
  }

  openModal(message) {
    let modal = Modal.create(MyModal, {message: message});
    this.nav.present(modal)
  }

}

@Page({
  templateUrl: 'build/pages/inbox/modal-content.html',
})

class MyModal {
  constructor(viewCtrl: ViewController,  params: NavParams) {
    this.message = params.data.message;
    this.dismissModal = function () {
      viewCtrl.dismiss();
    }
  }

}