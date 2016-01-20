import {Page} from 'ionic/ionic';
import {Modal, NavController, ViewController} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  presentContactModal() {
    let contactModal = Modal.create(ContactUs);
    this.nav.present(contactModal);
  }

  openModal() {
    let modal = Modal.create(MyModal);
    this.nav.present(modal)
  }

}

@Page({
  templateUrl: 'build/pages/page1/modal-content.html',
})

class MyModal {
  constructor(viewCtrl: ViewController) {
    var avatar =  {
      name: 'Gollum',
      title: 'The message title',
      image: 'images/yuna.jpg',
      message: 'This could be a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message'
    }
    this.avatar = avatar;
    this.dismissModal = function () {
      viewCtrl.dismiss();
    }

  }

}