import { Routes } from '@angular/router'
import { bookResolver } from '../resolvers/book.resolver'
import { SessionComponent } from './session.component'

export const sessionRoutes: Routes = [
  {
    path: '',
    component: SessionComponent,
  },
  {
    path: 'book/:title/chapter/:chapter',
    component: SessionComponent,
    resolve: {
      book: bookResolver,
    },
  },
]
