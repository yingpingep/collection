import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MeComponent } from './me/me.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [MeComponent, MediaComponent],
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
