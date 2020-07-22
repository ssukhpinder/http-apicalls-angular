import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-get-method-call',
  templateUrl: './get-method-call.component.html',
  styleUrls: ['./get-method-call.component.scss']
})
export class GetMethodCallComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  GetApiCallExample() {
    var header = new HttpHeaders().set("Header key 1", "Header value 1").set("Header key 2", "Header value 2");
    this.http.get("<Enter host url here>", { headers: header }).subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    );
  }

}
