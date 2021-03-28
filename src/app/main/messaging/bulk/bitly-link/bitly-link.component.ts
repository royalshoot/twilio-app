import { Component, OnInit } from '@angular/core';
import { BitlyService } from 'src/services/bitly.service';

@Component({
  selector: 'app-bitly-link',
  templateUrl: './bitly-link.component.html',
  styleUrls: ['./bitly-link.component.css']
})
export class BitlyLinkComponent implements OnInit {
  fullUrl!: string;
  shortenUrl:string = "";
  copyButtonText:string = "copy"
  constructor(private bitlyService: BitlyService) { }

  ngOnInit(): void {
  }

  shortenLink(){
    this.bitlyService.shortenLink(this.fullUrl).subscribe((res:any)=>{
      this.shortenUrl = res.link;
    },(err)=>{
      console.error(err);
    })
  }

  copyText(){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.shortenUrl;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.copyButtonText = "copied";
    setTimeout(() => {
      this.copyButtonText = "copy";
    }, 1000);
  }

}
