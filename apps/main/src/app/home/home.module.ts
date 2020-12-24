import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DemoCardComponent } from './demo-card/demo-card.component';

@NgModule({
  declarations: [HomeComponent, DemoCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            redirectTo: 'me',
            pathMatch: 'full',
          },
          {
            path: 'me',
            loadChildren: () =>
              import('@collection/intro').then((lib) => lib.IntroModule),
          },
        ],
      },
    ]),
    MatButtonModule,
    MatCardModule,
  ],
})
export class HomeModule {}
