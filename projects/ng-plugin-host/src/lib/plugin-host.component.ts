import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { PluginLoaderService } from './plugin-loader.service';
import { PluginManifest } from './plugin-manifest.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ng-plugin-host',
  template: `<span *ngIf="isError">Error loading plugin</span>`,
  styles: [],
})
export class NgPluginHostComponent implements OnChanges {

  @Input()
  public manifest: PluginManifest;

  public isError = false;

  private loadedPluginEl?: HTMLElement;

  constructor(private pluginLoaderService: PluginLoaderService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (!changes.manifest) {
      return;
    }

    this.isError = false;

    if (this.loadedPluginEl) {
      this.renderer.removeChild(this.el.nativeElement, this.loadedPluginEl);
      this.loadedPluginEl = undefined;
    }

    this.pluginLoaderService.LoadManifest(this.manifest)
      .then(
        () => {
          this.loadedPluginEl = this.renderer.createElement(this.manifest.selector);
          this.renderer.appendChild(this.el.nativeElement, this.loadedPluginEl);
        },
        () => {
          this.isError = true;
        }
      );
  }
}
