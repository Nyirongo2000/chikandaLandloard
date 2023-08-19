import "./Blog.css"
import smile from "../resources/relaxedLady.jpg";
const Blog=() => {
    return(
        <>
    <div>
    {/* <Link to="/">Home</Link> */}
        
        <div className='b-gray-100'>
            <div className='h-10 '>
                <p className='ml-5'>some word # into or ad</p>
                <hr className='ml-15 mr-15'/>
            </div>
            {/* some info before displaying the magazines #optional */}
                {/* add multiple colums */}
                
            <div className='flex flex-row flex-wrap justify-center mx-auto'>
                {/* 
                NOTE:
                remember to add a mobile view for the w to be full for mobile devices */}
                    <div  id="controlImg" className='flex flex-col flex-wrap p-3 mr-5 bg-blue-100 md:w-auto lg-w-3/5 '>
                        {/* main */}
                            <div  className='m-0.5  mr-2 p-1 bg-white rounded-md shadow-md'>
                                {/* get request */}
                             <img id="controlImg"src={smile} alt="Blog description"/>
                             <div>
                                <h1 id="h1HeadingBlog" className="text-center ">21 SECRETES OF SELF MADE MILIONARE</h1>
                                    {/* main article */}
                                    <p className="m-1 text-sm"> 
                                    But this is not for you. If you cannot save 10% of your income, start
                                    today by saving 1% of your income in a special savings and
                                    investment account. Put it away at the beginning of each month, even
                                    before you begin paying down your debts. Live on the other 99% of
                                    your income. As you become comfortable living on 99%, raise your 
                                    savings level to 2% of your income, then 3% and 4% and so on.       
                                    </p>
                                    {/* body */}
                                    <p className="m-1 text-sm">
                                        <br/>
                                    Within one year, you will be saving 10% and maybe even 15% or 20%
                                    of your income and living comfortably on the balance. At the same
                                    time, your savings and investment account will start to grow. You
                                    will become more careful about your expenditures and your debts
                                    will begin to be paid off. Within a year or two, your entire financial
                                    life will be under your control and you will be on your way to
                                    becoming a self-made millionaire. This process has worked for
                                    everyone who has ever tried it. See for yourself...
                                    </p>
                                    
                             </div>
                                
                                
                            </div>
                            {/* duplicates */}
                           
                            {/* duplicates */}
                           
                            
                            {/* other side */}
                           

                            <div className='text-sm w-full bg-white m-0.5 mr-2 rounded-md p-1'>
                                <p>Additional features ++</p>
                               <ul>
                                     <li>
                                        {/* headings will be generated */}
                                        <button className="p-1 m-1 text-sm text-white bg-yellow-600 rounded-md hover:bg-yellow-700"> Article headings</button>  
                                        <button className="p-1 m-1 text-sm text-white bg-yellow-600 rounded-md hover:bg-yellow-700"> Article headings</button>
                                        <button className="p-1 m-1 text-sm text-white bg-yellow-600 rounded-md hover:bg-yellow-700"> Article headings</button>
                                        <button className="p-1 m-1 text-sm text-white bg-yellow-600 rounded-md hover:bg-yellow-700"> Article headings</button>
                                        <button className="p-1 m-1 text-sm text-white bg-yellow-600 rounded-md hover:bg-yellow-700"> Article headings</button>                                              
                                    </li>
                                    <li>
                                       
                                    </li>
                               </ul>
                            </div>
                            <div className='text-sm w-full bg-white m-0.5 mr-2 rounded-md'>
                                <p>Pagination info to see more interensing articles</p> 
                            </div>
                    </div>
                    
                    {/* Additional features */}
                   

                    {/* side */}
                    <div className="flex flex-col w-auto p-2 m-2 bg-white rounded-md h-fill">
                        <div>
                             <p className="text-sm"> 
                             everything is posible hjabskcl;asvj ijs;lkbkj hjabskcl;asvj ijs;lkbk </p>

                        </div>
                        <div>
                            <p>some adds</p>
                        </div>
                      
                    </div>
            </div>
            
            
        </div>
        
    </div>
        </>
    )
}
export default Blog;