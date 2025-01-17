import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { <%=currentSubComponent.componentName%> } from './<%=currentSubComponent.componentTsName%>';

export const <%=currentSubComponent.routeName%>: Route = {
  path: '<%=currentSubComponent.locationName%>',
  component: <%=currentSubComponent.componentName%>,
  data: {
    authorities: [],
    pageTitle: '<%=currentSubComponent.pageTitle%>'
  },
  canActivate: [UserRouteAccessService]
};
