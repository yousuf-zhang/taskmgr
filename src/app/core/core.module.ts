import {NgModule, Optional, SkipSelf} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { HeardComponent } from './heard/heard.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeardComponent, FooterComponent, SidebarComponent],
  imports: [
    SharedModule
  ],
  exports: [HeardComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 只能导入一次');
    }
  }
}
