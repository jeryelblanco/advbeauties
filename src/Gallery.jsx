import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from "./Media/img1.jpeg"
import img2 from "./Media/img2.jpeg"
import img3 from "./Media/img3.jpeg"
import img4 from "./Media/img4.jpeg"
import img5 from "./Media/img5.jpeg"

function Gallery(){


    const fadeImages = [
        {
          url: img1,
          caption: 'First Slide'
        },
        {
          url: img2,
          caption: 'Second Slide'
        },
        {
          url: img3,
          caption: 'Third Slide'
        },
        {
          url: img4,
          caption: 'Forth Slide'
        },
        {
          url: img5,
          caption: 'Fifth Slide'
        }
      ];

return (
  <div className='Gallery'>
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%', height: '600px'}} src={fadeImage.url} />
            {/* <h2>{fadeImage.caption}</h2> */}
          </div>
        ))}
      </Fade>
    </div>
    </div>
)
}
export default Gallery;