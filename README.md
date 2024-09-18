# Notice: Repository Deprecation
This repository is deprecated and no longer actively maintained. It contains outdated code examples or practices that do not align with current MongoDB best practices. While the repository remains accessible for reference purposes, we strongly discourage its use in production environments.
Users should be aware that this repository will not receive any further updates, bug fixes, or security patches. This code may expose you to security vulnerabilities, compatibility issues with current MongoDB versions, and potential performance problems. Any implementation based on this repository is at the user's own risk.
For up-to-date resources, please refer to the [MongoDB Developer Center](https://mongodb.com/developer).


# Angular and GraphQL API Demo — Movie Catalog

This is an app that demonstrates how to use Angular and the [Atlas GraphQL API](https://www.mongodb.com/docs/realm/graphql/?utm_campaign=stanimira_vlaeva&utm_source=github&utm_medium=github).

You can also take a look at the supporting Google Slides presentation: [Practical Introduction to GraphQL](https://bit.ly/mdb-graphql).

Register for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register?utm_campaign=stanimira_vlaeva&utm_source=github&utm_medium=referral) and create a forever-free cluster!

## Usage

Update the `src/environments/environment.ts` file with your own keys:

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

