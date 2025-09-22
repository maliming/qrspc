import { NgModule } from '@angular/core';
import { DatePickerModule } from '@delon/abc/date-picker';
import { DownFileModule } from '@delon/abc/down-file';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { ExceptionModule } from '@delon/abc/exception';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { FullContentModule } from '@delon/abc/full-content';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { PageHeaderModule } from '@delon/abc/page-header';
import { QuickMenuModule } from '@delon/abc/quick-menu';
import { TagSelectModule } from '@delon/abc/tag-select';
import { LayoutDefaultModule } from '@delon/theme/layout-default';
import { ThemeBtnModule } from '@delon/theme/theme-btn';
import { SettingDrawerModule } from '@delon/theme/setting-drawer';

export const SHARED_DELON_MODULES = [
  DatePickerModule,
  DownFileModule,
  EllipsisModule,
  ErrorCollectModule,
  ExceptionModule,
  FooterToolbarModule,
  FullContentModule,
  GlobalFooterModule,
  NoticeIconModule,
  PageHeaderModule,
  QuickMenuModule,
  TagSelectModule,
  LayoutDefaultModule,
  ThemeBtnModule,
  SettingDrawerModule,
];

@NgModule({
  imports: [...SHARED_DELON_MODULES],
  exports: [...SHARED_DELON_MODULES],
})
export class SharedDelonModule {}
