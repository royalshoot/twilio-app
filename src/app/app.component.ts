import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'customer-care-app';
  ngOnInit(){
    /*
     * Inorder to run it on ngrok
     * ngrok http 8080 -host-header="localhost:8080"
     * ngrok http --host-header=rewrite 8080
     */
  }
} 
