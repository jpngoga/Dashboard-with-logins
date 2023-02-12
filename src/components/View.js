import React from 'react'
import '../components/View.css'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

export const View=()=> {
  return (
    <div className='view-wrapper'>
        <form className='form' style={{backgroundColor: "#faebd7"}}>
            <div><input type={"text"} placeholder="Street, city, or Zip"/></div>
            <div>
                            <label for="cars"></label>

                            <select name="status" className='boxes'>
                                <option value="volvo">All stutus</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
            </div>
            <div>
                            <label for="cars"></label>

                            <select name="status" className='boxes'>
                                <option value="volvo">All Cities</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
            </div>
            <div>
                            <label for="cars"></label>

                            <select name="status" className='boxes'>
                                <option value="volvo">All Zipcodes</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
            </div>
            
            <div><button className='boxe1'>Search</button></div>
            <div><button className='boxe2'>More</button></div>
                        
        </form>

        <section className='view-header'>
            <div>Listings</div>
            <div className='view-header-blocksilde'>
                <div>Home <MdOutlineKeyboardArrowRight/></div>
                <div>Listings <MdOutlineKeyboardArrowRight/></div>
                <div>8052 Camiro De Arriba</div>
            </div>
            
        </section>

        <div className='view-mid-wrapper'>
            <div className='view-mid-header'>
                <div className='block-1'>
                <h1>8052 Camino De Arriba</h1>
                <p>Rancho Santa Fe, CA 92067</p> 
                </div>
                <div className='block-2'>
                <button>FOR SALE</button>
                <h1>$4,980,000</h1>
                <p>Est. Payment $28,492/mo</p> 
                </div>
            </div>

            <div className='cards-pics-wrapper'>
                <div className='view-image-container'>
                    <img style={{width:"820px"}}src='https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/0.jpg'/>
                </div>
                <div className='view-side-image-container'>
                <>
                <img style={{width:"400px"}} src='https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/0.jpg'/>
 
                </>
                <>
                <img style={{width:"400px"}}src='https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/0.jpg'/>

                </>

                </div>
            </div>
           
        </div>
    </div>
  )
}


