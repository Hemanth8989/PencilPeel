import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,withInMemoryScrolling  } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import MyPreset from '../themes/preset';
import { provideHttpClient } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideMarkdown(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({
        scrollPositionRestoration: 'top',    // force scroll to top on all forward navigations
        anchorScrolling: 'enabled'
      })),
    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: MyPreset,
                options: {
                  darkModeSelector: false // disables dark mode entirely
                }
            }
            
    })
  ]
};
