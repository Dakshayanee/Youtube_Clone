
### to install redux###
for collapsing sidebar it can happen in any page across your app thats why lets keep that in global space that is redux store
npm i @reduxjs/toolkit
npm i react-redux
then create store-->ConfigureStore(provide slice to the store)
create slice--->then provide this store to app.js by using provider

create slice --->then create store--->provide this slice to the store--->create dispatch and pass this slice into it

### Debouncing ####
In search
if you type slow-the diff bet the 2 key stroke is more
if you type fast-the diff bet the 2 key stroke is less

performance
-iphone pro max=14 letter * 1000=14000 api calls
-with debouncing= 3 API calls *1000=3000

Debouncing with 200ms
-if diff bet 2 key stroke is <200ms - decline API call
- >2000ms make an API call


Cache:
time complexity to search in array =O(n)
time complexity to search in map(object) =O(1)

array.indexOf() =O(n)

### To fetch live data ##
1.get Data live
2.update the UI

*** To fetch live data **
1.Web Sockets-its a 2 way communication (UI ---->   <---server)eg.whatsup,trading
2.API Polling-its a 1 way communication(UI <---- server)
eg.gmail in which after 10 sec u will get data"# Youtube_Clone" 
