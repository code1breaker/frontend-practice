import axios from "axios"

export async function middleware(request) {
    console.log("object")
    try {
        // const data = await fetch("http://localhost:3001/api/validate-token",{
        //     method:"POST",
        //     headers:{
        //         id:process.env.ID,
        //         password:process.env.PASSWORD,
        //     },
        //     body:JSON.stringify({token:"12345token"})
        // })
        // const res = await data.json()

        // const data = await axios.post("http://localhost:3001/api/validate-token",
        //     {token:"sdsd"},
        //     {
        //     headers:{
        //         id:process.env.ID,
        //         password:process.env.PASSWORD,
        //     }
        // })

        const data = await axios.post("http://localhost:4000/product",
            {token:"sdsd"},
            {
            headers:{
                id:process.env.ID,
                password:process.env.PASSWORD,
            }
        })

        console.log(data.data,"Redsads")
        
    } catch (error) {
        console.log(error,"ERROR")
    }

}
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}