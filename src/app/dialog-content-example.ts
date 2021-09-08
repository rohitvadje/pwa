import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from './app.component';

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog implements AfterViewInit, OnInit {
  deferredPrompt: any;
  constructor(public dialog: MatDialog, private appComponent: AppComponent) {
  }
  ngOnInit(): void { 
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      console.log(`'beforeinstallprompt' event was fired.`);
    });
  }

  ngAfterViewInit(): void {
    const installBtn = document.getElementById("installBtn");
    if (installBtn != null) {
      installBtn.addEventListener('click', async () => { 
        this.deferredPrompt.prompt();
        const { outcome } = await this.deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        this.deferredPrompt = null;
      });
    }
  }

}