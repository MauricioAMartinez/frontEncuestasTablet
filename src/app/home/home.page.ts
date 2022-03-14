import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  documento = ''
  login = false;
  usuario: Array<any> = []

  constructor(private cookieService: CookieService,
    private router: Router,
    private alertController: AlertController,
    private loginService: LoginService,) { }



    ngOnInit() {

  
    }

  getLogin() {

    this.loginService.getUser(this.documento).subscribe(data => {

      localStorage.setItem('preguntas',JSON.stringify(data))
      this.usuario = data
      this.cookieService.set('documento', this.documento, 1, '/')
      this.login = true
      setTimeout(() => {
        this.login = false;
        this.router.navigate(['encuesta'])
      }, 3000);

    },(error=>{
      this.presentAlert()
    })
    )


  }


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Usuario no encontrado',
      buttons: ['OK']
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
