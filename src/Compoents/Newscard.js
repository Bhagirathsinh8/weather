import React from 'react'

export default function Newscard({ data }) {
    console.log(data);

function readMore (url){
    window.open(url);

}
    return (
        <div className='grid grid-cols-4 gap-3'>

            {

                data.map((currentItem, index) => {
                    return (
                        <div>
                            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 h-auto w-auto"
                                style={{ "height": "500px", "width": "400px" }}>
                                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md ">
                                    <img src={currentItem.urlToImage} alt="card-image" />
                                </div>
                                <div className="p-2">
                                    <h6 className="mb-2 text-slate-800 text-xl font-bold hover:underline">
                                        {currentItem.title}
                                    </h6>
                                    <p className="text-slate-600 leading-normal text-sm font-light">
                                        {currentItem.description}
                                    </p>
                                </div>
                                <div className="px-4 pb-4 pt-0 mt-2">
                                    <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
                                    type="button"
                                    onClick={readMore(currentItem.url)} >
                                        <a> Read more</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                            
                        
                        )
                       
    
                })}
        </div>
    )
}
