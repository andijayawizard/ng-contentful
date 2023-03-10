// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  contentful: {
    spaceId: 'g18ofyk6marz',
    accessToken: '4axoZZtERjcjwPbN-8jSZtTOOOw20yokyKqnNkW27YY',
    contentTypeIds: {
      jobListing: 'jobListing',
      angularBlog: 'angularBlog',
      product: 'product',
      blog: 'blog',
      course: 'course'
    }
  }
  // apiUrl: 'http://localhost:8000',
  // authUrl: 'http://localhost:8000/oauth/token',
  // client_secret: 'kHG2vqtAYJcy053Czo5a4DA6YnmNmvFBOAenqBqT',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
