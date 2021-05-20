import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { YesNoDialogComponent } from './components/yes-no-dialog/yes-no-dialog.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemListCardComponent } from './components/item-list-card/item-list-card.component';
import { ItemListContentComponent } from './components/item-list-content/item-list-content.component';
import { ItemListHeaderComponent } from './components/item-list-header/item-list-header.component';
import { ItemListFooterComponent } from './components/item-list-footer/item-list-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContentComponent } from './components/form-content/form-content.component';
import { TitleComponent } from './components/title/title.component';
import { EmptyListComponent } from './components/empty-list/empty-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from '@test-luizalabs/shared';
import { NtmCoreModule } from '@ntm-al/angular';
@NgModule({
  declarations: [
    HeaderComponent,
    YesNoDialogComponent,
    ItemListCardComponent,
    ItemListContentComponent,
    ItemListHeaderComponent,
    ItemListFooterComponent,
    FormContentComponent,
    TitleComponent,
    EmptyListComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule, NtmCoreModule],
  exports: [
    HeaderComponent,
    ItemListContentComponent,
    ItemListHeaderComponent,
    ItemListFooterComponent,
    ItemListCardComponent,
    FormContentComponent,
    FormContentComponent,
    EmptyListComponent,
    TitleComponent,
    PageNotFoundComponent,
  ],
})
export class SharedModule {}
