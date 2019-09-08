import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgPluginHostComponent as PluginHostComponent } from './plugin-host.component';
import { PluginLoaderService } from './plugin-loader.service';

@NgModule({
  declarations: [PluginHostComponent],
  imports: [CommonModule],
  providers: [PluginLoaderService],
  exports: [PluginHostComponent]
})
export class PluginHostModule { }
