import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { <%=componentName%> } from './<%=componentTsName%>';

export const <%=routeName%>: Route = {
  path: '<%=locationName%>',
  component: <%=componentName%>,
  data: {
    authorities: [],
    pageTitle: '<%=pageTitle%>'
  },
  canActivate: [UserRouteAccessService]
};
