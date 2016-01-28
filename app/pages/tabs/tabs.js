import {Page} from 'ionic/ionic';
import {PageInbox} from '../inbox/inbox';
import {Dialog} from '../inbox/dialog'


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {

    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = PageInbox;

  }
}
