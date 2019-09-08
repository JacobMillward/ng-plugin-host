import { NgModule } from '@angular/core';
import { NgPluginHostComponent as PluginHostComponent } from './plugin-host.component';
import { PluginLoaderService } from './plugin-loader.service';



@NgModule({
  declarations: [PluginHostComponent],
  imports: [],
  providers: [PluginLoaderService],
  exports: [PluginHostComponent]
})
export class PluginHostModule { }
