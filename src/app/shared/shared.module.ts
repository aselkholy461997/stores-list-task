import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingSpinnerComponent],
  exports: [
    CommonModule,
    LoadingSpinnerComponent,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
