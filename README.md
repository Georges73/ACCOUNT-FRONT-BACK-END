# ACCOUNT-FRONT-BACK-END

This app just shows how autocomplte works with Angular, Springboot Elasticsearchrepository and Elasticsearch 6.X
This app works perfectly but is still in a draft stage.
Meaning, it still has some leftovers of the battlefield that it was. 
So please appologise if it's a bit messy. 



Versions used:
Elasticsearch 6.2.2
Angular 8
Springboot 2.0.1

If you want a large dataset that you want to import into Elasticsearch, use the sample dataset called accounts.json file in the project.

1. Just use the following Curl command: curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/financial/accounts/_bulk?pretty' --data-binary @accounts.json
  - financial is the index 
  - accounts is the type
  That's it.
  
2. Start the Springboot backend.
3. Start the Angular 8 Frontend.