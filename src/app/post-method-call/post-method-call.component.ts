import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-post-method-call',
  templateUrl: './post-method-call.component.html',
  styleUrls: ['./post-method-call.component.scss']
})
export class PostMethodCallComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  PostApiCallExample() {
    var header = new HttpHeaders().set("Header key 1", "Header value 1").set("Header key 2", "Header value 2");
    var body = {
      Key1: "value1",
      Key2: "value2"
    };
    this.http.post("<Enter host url here>", JSON.stringify(body), { headers: header }).subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    );
  }
}
