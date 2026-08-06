import prisma from "./prisma";

export async function getBookmarkedArticlesByUserId(userId:string){
    try{

        const articles= await prisma.bookmark.findMany({
            where:{
                userId:userId
            }
        })

        if(articles.length===0){
            return {
                articles: null,
                error: "No article found"
            }
        }

        return {
            articles: articles,
            error:null
        }
    }
    catch(error){
        return {
            articles: null,
            error: "Failed to fetch bookmarked articles"
        }
    }

    }


