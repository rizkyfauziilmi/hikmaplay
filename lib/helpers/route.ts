export function matchesRouteList(routes: string[], pathname: string) {
  return routes.some((r) => pathname === r || pathname.startsWith(r + "/"));
}
