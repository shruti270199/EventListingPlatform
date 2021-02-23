import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPage } from './events.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: EventsPage
  // },
  {
    path: 'tabs',
    component: EventsPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule),
          },
          {
            path: 'eventId',
            loadChildren: () => import('./discover/event-details/event-details.module').then( m => m.EventDetailsPageModule),
          }
        ]
      },
      {
        path: 'offer',
        children: [
          {
            path: '',
            loadChildren: () => import('./offer/offer.module').then( m => m.OfferPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./offer/new-offers/new-offers.module').then( m => m.NewOffersPageModule)
          },
          {
            path: 'edit/:eventId',
            loadChildren: () => import('./offer/edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
          },
          {
            path: ':eventId',
            loadChildren: () => import('./offer/offer-booking/offer-booking.module').then( m => m.OfferBookingPageModule)
          }
        ]
      }

    ]
  },
  {
    path: '',
    redirectTo: 'events/tabs/discover',
    pathMatch: 'full',

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsPageRoutingModule {}
