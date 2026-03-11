const page = async ({params}: {params: Promise<{categoryId: string}>}) => {
  const {categoryId} = await params
  return <div>{categoryId} page</div>
}

export default page
