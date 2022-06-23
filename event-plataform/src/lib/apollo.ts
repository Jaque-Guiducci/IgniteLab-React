import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r06xqv0fkl01wba31dav9l/master',
    cache: new InMemoryCache()
})