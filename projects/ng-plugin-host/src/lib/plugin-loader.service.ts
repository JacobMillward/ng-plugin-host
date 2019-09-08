import { Injectable, Renderer2 } from '@angular/core';
import { PluginManifest } from './plugin-manifest.model';

@Injectable({
  providedIn: 'root'
})
export class PluginLoaderService {

  private loadedPlugins = new Map<string, HTMLScriptElement>();

  constructor(private renderer: Renderer2) { }

  LoadManifest(manifest: PluginManifest, loadTimeoutMs = 1500): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.loadedPlugins.has(manifest.id)) {
        resolve();
        return;
      }

      const newScriptEl = this.renderer.createElement('script');
      newScriptEl.src = manifest.url;

      let timeoutHandle;
      newScriptEl.onload = () => {
        clearTimeout(timeoutHandle);
        this.loadedPlugins[manifest.id] = newScriptEl;
        resolve();
      };

      this.renderer.appendChild(document.body, newScriptEl);
      timeoutHandle = setTimeout(() => {
        newScriptEl.onload = undefined;
        reject();
      }, loadTimeoutMs);
    });
  }
}
