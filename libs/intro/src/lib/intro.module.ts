import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MeComponent } from './me/me.component';

@NgModule({
  declarations: [MeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MeComponent,
      },
    ]),
  ],
})
export class IntroModule {}
