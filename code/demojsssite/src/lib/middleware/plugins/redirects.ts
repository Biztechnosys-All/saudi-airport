import { NextRequest, NextResponse } from 'next/server';
import { RedirectsMiddleware } from '@sitecore-jss/sitecore-jss-nextjs/middleware';
import { MiddlewarePlugin } from '..';
import { siteResolver } from 'lib/site-resolver';
import clientFactory from 'lib/graphql-client-factory';

class RedirectsPlugin implements MiddlewarePlugin {
  private redirectsMiddleware: RedirectsMiddleware;
  order = 0;

  constructor() {
    this.redirectsMiddleware = new RedirectsMiddleware({
      // Client factory implementation
      clientFactory,
      // These are all the locales you support in your application.
      // These should match those in your next.config.js (i18n.locales).
      locales: ['en','ar-SA'],
      // This function determines if a route should be excluded from RedirectsMiddleware.
      // Certain paths are ignored by default (e.g. Next.js API routes), but you may wish to exclude more.
      // This is an important performance consideration since Next.js Edge middleware runs on every request.
      excludeRoute: () => false,
      // This function determines if the middleware should be turned off.
      // By default it is disabled while in development mode.
      disabled: () => process.env.NODE_ENV === 'development',
      // Site resolver implementation
      siteResolver,
    });
  }

  /**
   * exec async method - to find coincidence in url.pathname and redirects of site
   * @param req<NextRequest>
   * @returns Promise<NextResponse>
   */
  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    return this.redirectsMiddleware.getHandler()(req, res);
  }
}

export const redirectsPlugin = new RedirectsPlugin();
