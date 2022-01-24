import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  fileName = 'ExcelSheet ';
  userList = [
    {
      "id": 1,
      "name": "VOC",
      "price": "12,000",
      "email": "Sincere@april.biz"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "price": "12,000",
      "email": "Shanna@melissa.tv"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "price": "12,000",
      "email": "Nathan@yesenia.net"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "price": "12,000",
      "email": "Julianne.OConner@kory.org"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "price": "12,000",
      "email": "Lucio_Hettinger@annie.ca"
    }
  ]
  exportexcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.userList);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    const today = new Date();

    XLSX.writeFile(wb, this.fileName + today + ".xls");
  }
}
