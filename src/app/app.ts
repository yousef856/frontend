import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // ضروري جداً لكي يعمل ngClass بشكل صحيح
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { Products } from './components/pages/products/products';
import { Footer } from './components/footer/footer';
import { SidebarComponent } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    Products,
    Footer,
    SidebarComponent,
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
// متغير التحكم بحالة الطي والإخفاء
  isSidebarHidden = false;

  // دالة تبديل الحالة عند النقر على زر القائمة في الهيدر
  onToggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
}
