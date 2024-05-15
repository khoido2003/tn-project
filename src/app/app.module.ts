import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HlmButtonDirective } from './ui/ui-button-helm/src/lib/hlm-button.directive';
import { HlmIconComponent } from './ui/ui-icon-helm/src/lib/hlm-icon.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { provideIcons } from '@ng-icons/core';

import { HlmMenuComponent } from './ui/ui-menu-helm/src/lib/hlm-menu.component';
import { HlmSubMenuComponent } from './ui/ui-menu-helm/src/lib/hlm-sub-menu.component';
import { HlmMenuItemDirective } from './ui/ui-menu-helm/src/lib/hlm-menu-item.directive';
import { HlmMenuItemSubIndicatorComponent } from './ui/ui-menu-helm/src/lib/hlm-menu-item-sub-indicator.component';
import { HlmMenuLabelComponent } from './ui/ui-menu-helm/src/lib/hlm-menu-label.component';
import { HlmMenuShortcutComponent } from './ui/ui-menu-helm/src/lib/hlm-menu-shortcut.component';
import { HlmMenuSeparatorComponent } from './ui/ui-menu-helm/src/lib/hlm-menu-separator.component';
import { HlmMenuItemIconDirective } from './ui/ui-menu-helm/src/lib/hlm-menu-item-icon.directive';
import { HlmMenuGroupComponent } from './ui/ui-menu-helm/src/lib/hlm-menu-group.component';
import {
  lucideChevronDown,
  lucideCornerDownRight,
  lucideMenu,
  lucidePhone,
  lucidePictureInPicture2,
  lucideScanLine,
  lucideSearch,
  lucideStar,
} from '@ng-icons/lucide';
import { NavComponent } from './components/nav/nav.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HlmCarouselComponent } from './ui/ui-carousel-helm/src/lib/hlm-carousel.component';
import { HlmCarouselContentComponent } from './ui/ui-carousel-helm/src/lib/hlm-carousel-content.component';
import { HlmCarouselItemComponent } from './ui/ui-carousel-helm/src/lib/hlm-carousel-item.component';
import { HlmCarouselNextComponent } from './ui/ui-carousel-helm/src/lib/hlm-carousel-next.component';
import { HlmCarouselPreviousComponent } from './ui/ui-carousel-helm/src/lib/hlm-carousel-previous.component';
import { CodeSearchComponent } from './components/code-search/code-search.component';
import { HlmInputDirective } from './ui/ui-input-helm/src/lib/hlm-input.directive';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { HighlightProductsComponent } from './components/highlight-products/highlight-products.component';
import { HighlightCompanyComponent } from './components/highlight-company/highlight-company.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CarouselComponentComponent } from './components/carousel-component/carousel-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DropdownMenuComponent,
    NavComponent,
    CarouselComponent,
    CodeSearchComponent,
    NewsSectionComponent,
    HighlightProductsComponent,
    HighlightCompanyComponent,
    ContactFormComponent,
    ProductDetailComponent,
    CarouselComponentComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

    BrnMenuTriggerDirective,
    HlmButtonDirective,
    HlmInputDirective,
    HlmIconComponent,

    HlmMenuComponent,
    HlmSubMenuComponent,
    HlmMenuItemDirective,
    HlmMenuItemSubIndicatorComponent,
    HlmMenuLabelComponent,
    HlmMenuShortcutComponent,
    HlmMenuSeparatorComponent,
    HlmMenuItemIconDirective,
    HlmMenuGroupComponent,

    HlmCarouselComponent,
    HlmCarouselContentComponent,
    HlmCarouselItemComponent,
    HlmCarouselNextComponent,
    HlmCarouselPreviousComponent,
  ],
  providers: [
    provideIcons({
      lucideChevronDown,
      lucideMenu,
      lucideSearch,
      lucideScanLine,
      lucidePictureInPicture2,
      lucideStar,
      lucideCornerDownRight,
      lucidePhone,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
