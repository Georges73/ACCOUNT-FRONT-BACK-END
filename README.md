# ACCOUNT-FRONT-BACK-END

This app just shows how autocomplte works with Angular, Springboot Elasticsearchrepository and Elasticsearch 6.X.
The purpose is to show how autocopmlete search can work in this architecture. 
This app works perfectly but is still in a draft stage.
Meaning, it still has some leftovers of the battlefield it was. 
So please appologise if it's a bit messy. 



Versions used:
Elasticsearch 6.2.2
Angular 8
Springboot 2.0.1

I've used curl to import accounts.json dataset into Elasticsearch. This file is available in the project.

 In order to achieve this I've run the following Curl command: 
  curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/financial/accounts/_bulk?pretty' --data-binary @accounts.json
 
  - financial represents the index 
  - accounts represents the type
  That's it.
  
  1. start Elasticsearch
  2. Start the Springboot backend.
  3. Start the Angular 8 Frontend.
  
