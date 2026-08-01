import EmptyLibrary from "@/components/ui/sections/empty-library"
import LibraryContent from "@/components/ui/sections/library-content"
import SavedHeader from "@/components/ui/sections/saved-header"

const page = () => {
  return (
    <>
    <SavedHeader/>
    <LibraryContent/>
    <EmptyLibrary/>
    </>
  )
}

export default page