import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const LeftInAnimation = trigger(
  'leftInAnimation',
  [
    transition('* <=> *', 
      [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateX(-200%)' }),
            stagger(
              '100ms',
              animate(
                '1s ease-out',
                style({ opacity: 1, transform: 'translateX(0px)' })
              )
            )
          ],
          { optional: true }
        ),
      ]
    ),
  ],
);
