import { Component, OnInit, PlatformRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-registropark',
  templateUrl: './registropark.page.html',
  styleUrls: ['./registropark.page.scss'],
})
export class RegistroparkPage implements OnInit {

  constructor(private platform: PlatformRef, private file: File, private ft: FileTransfer,
    private fileOpener: FileOpener, private document: DocumentViewer) {

    }
    openLocalPdf(){
      let filePath = this.file.applicationDirectory + 'assets';

      if (this.platform.is('andorid')){
        let fakeName = Date.now();
        this.file.copyFile(filePath, 'TyC_PARKIT.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {

        });
      }else{
        const options: DocumentViewerOptions = {
          title: 'Terminos Y Condiciones PARKIT'
        }
        this.document.viewDocument(`${filePath}/TyC_PARKIT.pdf`, 'application/pdf', options);
      }
    }

  ngOnInit() {
  }

}
