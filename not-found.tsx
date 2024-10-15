import Link from "next/link";
export default function NotFound(){
    return(

    <div >
<div className="bg-purple-400 text-black  h-screen text-small ">
           <div> <h1>404</h1></div>
            <p>Page not found </p>
            <p> <button className="bg-blue-900 px-3 py-3 rounded cursor-pointer"><Link href="/">Go back to Home</Link></button>
            </p>
</div>
    </div>
        
    
    );
}