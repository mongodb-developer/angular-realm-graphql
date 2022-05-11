# Angular and GraphQL API Demo — Movie Catalog

This is an app that demonstrates how to use Angular and the [Realm GraphQL API](https://www.mongodb.com/docs/realm/graphql/).

## Usage

Update the `src/app/environment.ts` file with your own keys:

```ts
export const environment = {
  production: false,
  APP_ID: '<your-app-id>',
  GRAPHQL_URI: '<your-graphql-uri>',
  API_KEY: '<your-api-key>',
};
```

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## Disclaimer

Use at your own risk; not a supported MongoDB product

