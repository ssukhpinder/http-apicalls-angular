import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-put-method-call',
  templateUrl: './put-method-call.component.html',
  styleUrls: ['./put-method-call.component.scss']
})
export class PutMethodCallComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

  PutApiCallExample() {
    var header = new HttpHeaders().set("Header key 1", "Header value 1").set("Header key 2", "Header value 2");
    var body = {
      Key1: "value1",
      Key2: "value2"
    };
    this.http.put("<Enter host url here>", JSON.stringify(body), { headers: header }).subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    );
  }
}
