import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { PluginLoaderService } from './plugin-loader.service';
import { PluginManifest } from './plugin-manifest.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ng-plugin-host',
  template: '',
  styles: []
})
export class NgPluginHostComponent implements OnChanges {

  @Input()
  public manifest: PluginManifest;

  private loadedPluginEl?: HTMLElement;

  constructor(private pluginLoaderService: PluginLoaderService, private renderer: Renderer2, private el: ElementRef) { }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (!changes.manifest) {
      return;
    }

    if (this.loadedPluginEl) {
      this.renderer.removeChild(this.el.nativeElement, this.loadedPluginEl);
    }

    await this.pluginLoaderService.LoadManifest(this.manifest);

    this.loadedPluginEl = this.renderer.createElement(this.manifest.selector);
    this.renderer.appendChild(this.el.nativeElement, this.loadedPluginEl);
  }
}
