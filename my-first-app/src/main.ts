import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ServerComponent } from './app/server/app.server.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
