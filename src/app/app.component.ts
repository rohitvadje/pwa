import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './dialog-content-example';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'material-with-sw';

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    if (window.matchMedia('(display-mode: standalone)').matches==false) {
      console.log("PWA not installed, dialogue shown to user");
      const dialogRef = this.dialog.open(DialogContentExampleDialog);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

}