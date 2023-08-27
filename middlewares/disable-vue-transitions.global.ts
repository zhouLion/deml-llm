export default defineNuxtRouteMiddleware((to) => {
  // @ts-expect-error built-in Vue transitions
  if (typeof document !== 'undefined' && !document.startViewTransition)
    return

  // Disable built-in Vue transitions
  // to.meta.pageTransition = false
  to.meta.layoutTransition = false
})
