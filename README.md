# Blog with Sanity cms

Run the project by
`npm run dev`
then, you can find the nextjs frontend is running on `http://localhost:3000` and you can find the embeded sanity studio on `http://localhost:3000/studio`.

## Don't forget these steps
use `npx sanity schema extract` to get the latest schema and `npx sanity typegen generate` to generate exact types of those schema 
latest page will only update or rebuild when a new content is added from an author
library page will rebuild when a post is saved or removed from the list

Completed
1. implement the new ui for author page
2. update sanity schema to adapt pay per content and add overlay to paid content
3. enhance author card image quality at homepage
4. add protection for subscribers only articles
5. protect library page fro unauthenticated users
6. check responsiveness on smaller devices 
7. add corresponding notfound and empty page for author and category page
8. integrate neondb for library functionality


todo for tomorrow

Todo
build the project push to github, commit all changes