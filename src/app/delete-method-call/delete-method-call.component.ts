import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-delete-method-call',
  templateUrl: './delete-method-call.component.html',
  styleUrls: ['./delete-method-call.component.scss']
})
export class DeleteMethodCallComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

  DeleteApiCallExample() {
    var header = new HttpHeaders().set("Header key 1", "Header value 1").set("Header key 2", "Header value 2");
    this.http.delete("<Enter host url here>", { headers: header }).subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    );
  }
}
