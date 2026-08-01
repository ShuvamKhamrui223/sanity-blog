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
todo for tomorrow
2. update sanity schema to adapt pay per content and add overlay to paid content

Todo
1. integrate neondb for library functionality
2. enhance authhor card image quality at homepage