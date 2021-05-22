import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'htmlToPdf';

  captureScreen(){
    var data = document.getElementById("contentToConvert");

    html2canvas(data).then(canvas =>{
      var imageWith = 300;
      var pageHeight = 295;
      var imgHeight = canvas.height * imageWith / canvas.width;
      var heightLeft = imgHeight;

      const contentDataUrl = canvas.toDataURL('image/png');
      let pdf = 
      new jsPDF('p','mm','a4');
      var position =0;
      pdf.addImage(contentDataUrl,'PNG',0,position,imageWith,imgHeight);
      console.log("PDF ===== ",pdf);
      console.log(pdf.AcroForm)
      pdf.save('Test.pdf');
      console.log("PDF 1 ===== ",pdf);
     
    })
  }
}
