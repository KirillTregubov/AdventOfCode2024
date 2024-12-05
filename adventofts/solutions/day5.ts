export const createRoute = <G>(author: string, route: G) => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`)
  return route
}
