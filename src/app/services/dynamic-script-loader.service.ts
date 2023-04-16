import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  { name: 'custom', src: "/assets/js/custom.js" }
];

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class DynamicScriptLoaderService {
  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => this.loadScript(script));
    return Promise.all(promises);
  }

  loadScript(script: string) {
    $("#" + script).remove()
    const node = document.createElement('script');
    node.src = this.scripts[script].src;
    node.type = 'text/javascript';
    node.async = false;
    node.id = script;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
