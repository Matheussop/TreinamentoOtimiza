import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Caixa de Entrada',
      url: '/folder/Caixa de Entrada',
      icon: 'mail'
    },
    {
      title: 'Enviar',
      url: '/folder/Enviar',
      icon: 'paper-plane'
    },
    {
      title: 'favoritos',
      url: '/folder/Favoritos',
      icon: 'heart'
    },
    {
      title: 'Arquivado',
      url: '/folder/Arquivado',
      icon: 'archive'
    },
    {
      title: 'Lixo',
      url: '/folder/Lixo',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['Familia', 'Amigos', 'Notas', 'Trabalhos', 'Viagem', 'Lembretes'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
