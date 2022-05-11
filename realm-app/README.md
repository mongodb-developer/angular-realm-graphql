# Realm Application

The [`MovieCatalog`](./MovieCatalog/) directory contains the Realm application configuration, including:

- the schemas of the [`Movies`](./MovieCatalog/data_sources/mongodb-atlas/sample_mflix/movies/schema.json) and [`Comments`](./MovieCatalog/data_sources/mongodb-atlas/sample_mflix/comments/schema.json) collections;
- the [`loadCommentsOffset.js`](./MovieCatalog/functions/loadCommentsOffset.js) function;
- the [`CommentsOffset`](./MovieCatalog/graphql/custom_resolvers/query_CommentsOffset.json) custom resolver.

To learn more about the configuration, visit the [Realm Application Configuration documentation](https://www.mongodb.com/docs/realm/manage-apps/configure/config/).
