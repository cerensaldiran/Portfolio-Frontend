import { Component, HostBinding, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
import { error } from 'jquery';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

scripts:string[]=['custom']
constructor(private dynamicScriptLoader:DynamicScriptLoaderService){}
  ngOnInit(): void {
    this.loadScripts(this.scripts)
}
loadScripts(scripts:string[]){
  this.dynamicScriptLoader.load(scripts).then(data=>{
  }).catch(error=>console.log(error))
}

}
