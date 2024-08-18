import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { request } from "http";

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)', 
  '/sign-up(.*)',
  '/api/assistant/create', 
  '/api/message/create', 
  '/api/thread/create',
  '/api/message/list',
  '/api/run/create',
  '/api/run/retrieve'
])
export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    // '/',
    // '/(api|trpc)(.*)',
  ],
};