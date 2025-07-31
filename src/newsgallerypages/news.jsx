import newsone from '../assets/newsgalleryimg/newsone.png';
import newstwo from '../assets/newsgalleryimg/newstwo.png';
import newsthree from '../assets/newsgalleryimg/newsthree.png';
import newsfour from '../assets/newsgalleryimg/newsfour.png';
import newsfive from '../assets/newsgalleryimg/newsfive.png';
import newssix from '../assets/newsgalleryimg/newssix.png';
import newsseven from '../assets/newsgalleryimg/newsseven.png';
import newseight from '../assets/newsgalleryimg/newseight.png';
import newsnine from '../assets/newsgalleryimg/newsnine.png';
import newsten from '../assets/newsgalleryimg/newsten.png';
import newseleven from '../assets/newsgalleryimg/newseleven.png';
import newstwelve from '../assets/newsgalleryimg/newstwelve.png';
import newsthirteen from '../assets/newsgalleryimg/newsthirteen.png';
import newsfourteen from '../assets/newsgalleryimg/newsfourteen.png';
import newsfourteenadd from '../assets/newsgalleryimg/newsfourteenadd.png';
import newsfifteen from '../assets/newsgalleryimg/newsfifteen.png';
import newsfifteenadd from '../assets/newsgalleryimg/newsfifteenadd.png';
import newssixteen from '../assets/newsgalleryimg/newssixteen.png';
import newssixteenadd from '../assets/newsgalleryimg/newssixteenadd.png';
import family from '../assets/newsgalleryimg/family.png';

const News = () => {
    return (
        <div className="col-12 col-md-12">
            <img src={newsone} alt="News" className="img-fluid rounded" />

            <div className='row'>
                <div className='col-12 col-md-6'>
                    <img src={newstwo} className='img-fluid rounded mt-3' />
                </div>
                <div className='col-12 col-md-6 '>
                    <img src={newsthree} className='img-fluid rounded mt-3' />
                </div>
            </div>
            <div className='row align-items-center justify-content-center'>
                <div className='col-12 col-md-5' >
                    <img src={newsfour} className='img-fluid rounded mt-3' />
                </div>
                <div className='col-12 col-md-5' >
                    <img src={newsfive} className='img-fluid rounded mt-3' />
                    <img src={newssix} className='img-fluid rounded mt-3' />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-4' >
                    <img src={newsseven} className='img-fluid rounded mt-3' />
                    <img src={newsten} className='img-fluid rounded mt-3' />
                    <img src={newstwelve} className='img-fluid rounded mt-3' />
                    <img src={newsfifteen} className='img-fluid rounded mt-3' />
                    <img src={newsfifteenadd} className='img-fluid rounded mt-n5' />
                </div>
                <div className='col-12 col-md-4' >
                    <img src={newseight} className='img-fluid rounded mt-3' />
                    <img src={newsthirteen} className='img-fluid rounded mt-3' />
                    <img src={newssixteen} className='img-fluid rounded mt-3' />
                    <img src={newssixteenadd} className='img-fluid rounded' />

                </div>
                <div className='col-12 col-md-4'>
                    <img src={newsnine} className='img-fluid rounded mt-3' />
                    <img src={newseleven} className='img-fluid rounded mt-3' />
                    <img src={newsfourteen} className='img-fluid rounded mt-3' />
                    <img src={newsfourteenadd} className='img-fluid rounded mt-n5' />
                </div>
            </div>
            <div className='row justify-content-center mt-5'>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <img src={family} className="img-fluid" alt="family" />
                </div>
            </div>

        </div>
    );
};

export default News;
