import './styles.css'
import bmw from './imgs/bmw8.jpg'
import a4 from './imgs/audia4.jpg'
import {GrLocation} from 'react-icons/gr'
import {MdCall} from 'react-icons/md'
import {BsGrid} from 'react-icons/bs'
import {AiOutlineUnorderedList} from 'react-icons/ai'

function App() {

  return (   
    
    <body>
      <div className='container'>

        <div className='box'>
          <div className='wrapper-global'>
            <div className='wrapper-search'>
              <p><b>Total Cars Find: 207</b></p>
            </div>
            <div className='wrapper-layout'>
              <p className='wrapper-layout2'><BsGrid /></p>
              <p className='wrapper-layout3'><AiOutlineUnorderedList /></p>
            </div>
          </div>
        </div>

        <div className='box2'>
          <div className='wrapper-image'>
            <img src={bmw} alt="BMW8" />
          </div>
          <div className='wrapper-infos'>
            <div className='line1'>
              <div className='sub-title'>
                <p className='sub-title1'>For Rent</p>
                <p className='sub-title2'>New Car</p>
              </div>
              <div className='value'>
                <p><b>$13,000</b>/mo</p>
              </div>
            </div>
            <div className='financing'>
              <p>Calculate Financing</p>
            </div>
            <div className='car-name'>
              <p><b>BMW 8-Series 2-Door</b></p>
            </div>
            <div className='address'>
              <p><GrLocation />71 - Wast San Park St, New York, NY 98517</p>
            </div>
            <hr />
            <div className='wrapper-sub-infos'>
              <div className='sub-infos2'>
                <p><MdCall />
                  Call
                </p>
              </div>
              <p>Model: 2020</p>
              <p>Doors: 2</p>
              <p>260,000 miles</p>
            </div>
          </div>
        </div>


        <div className='box2'>
          <div className='wrapper-image'>
            <img src={a4} alt="AUDI A4" />
          </div>
          <div className='wrapper-infos'>
            <div className='line1'>
              <div className='sub-title'>
                <p className='sub-title1'>For Rent</p>
                <p className='sub-title2'>New Car</p>
              </div>
              <div className='value'>
                <p><b>$37,000</b>/mo</p>
              </div>
            </div>
            <div className='financing'>
              <p>Calculate Financing</p>
            </div>
            <div className='car-name'>
              <p><b>Audi A4 4-Door Sedan</b></p>
            </div>
            <div className='address'>
              <p><GrLocation />71 - Wast San Park St, New York, NY 98517</p>
            </div>
            <hr />
            <div className='wrapper-sub-infos'>
              <div className='sub-infos2'>
                <p><MdCall />
                  Call
                </p>
              </div>
              <p>Model: 2020</p>
              <p>Doors: 4</p>
              <p>260,000 miles</p>
            </div>
          </div>
        </div>
      </div>
    </body>
 )
}

export default App
