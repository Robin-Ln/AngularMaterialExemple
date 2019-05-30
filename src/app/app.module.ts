import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatMenuModule,
  MatTreeModule
} from '@angular/material';

// Translate
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TextComponent } from './text/text.component';


@NgModule({
  declarations: [
    // Composant principale
    AppComponent,
    // Composants de test
    AddressFormComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    TreeComponent,
    DragDropComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    // Route
    AppRoutingModule,
    // Animation
    BrowserAnimationsModule,
    // Matérial
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    // Layout
    LayoutModule,
    // Drag & Drop
    DragDropModule,
    // Http
    HttpClientModule,
    // Translate
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
