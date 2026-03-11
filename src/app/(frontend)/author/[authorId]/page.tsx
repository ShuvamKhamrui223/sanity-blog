const page = async ({params}: {params: Promise<{authorId: string}>}) => {
  const {authorId} = await params
  return <div>{authorId} page</div>
}

export default page
