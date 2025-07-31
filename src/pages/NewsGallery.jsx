
// import news from '../newsgallerypages/news.jsx';
// import gallery from '../newsgallerypages/gallery.jsx';

// import { useState } from 'react';

// const ngpages = [
//     {
//         name: "News",
//         page: news
//     },
//     {
//         name: "Gallery",
//         page: gallery
//     }
// ];

// const NewsGallery = () => {

//     const [selectedPage, setSelectedPage] = useState(nspages[0]);

//     return (

//         <div className="container my-5 pt-5">
//             <hr />
//             <div>
//                 {ngpages.map(({ name, page }, index) => (
//                     <div key={index}
//                         onClick={() => setSelectedPage({ name, page })}
//                         style={{ cursor: 'pointer' }} >

//                         <div className={`m-2 bg-white rounded-4 shadow-sm p-3 transition ${selectedPage?.name === name ? 'border border-primary' : ''}`}>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="col-md-10 d-flex justify-content-center bg-light border-start rounded-2 min-vh-50 p-4">
//                 <selectedPage.page />
//             </div>
//         </div>
//     )
// }

// export default NewsGallery;

import News from '../newsgallerypages/news.jsx';
// import Gallery from '../newsgallerypages/gallery.jsx';
import Gallery from '../newsgallerypages/gallery.jsx';

import { useState } from 'react';

const ngpages = [
    {
        name: "News",
        page: News
    },
    {
        name: "Gallery",
        page: Gallery
    }
];

const NewsGallery = () => {
    const [selectedPage, setSelectedPage] = useState(ngpages[0]);
    const SelectedComponent = selectedPage.page;

    return (
        <div className="container my-5 pt-5">
            <hr />

            {/* Buttons for Page Selection */}
            <div className="d-flex justify-content-center mb-4 gap-3 flex-wrap">
                {ngpages.map(({ name }, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedPage(ngpages[index])}
                        className={`btn ${selectedPage.name === name ? 'btn-primary' : 'btn-outline-primary'}`}
                    >
                        {name}
                    </button>
                ))}
            </div>

            {/* Selected Page Component Display */}
            <div className="mx-auto d-flex justify-content-center bg-light border-start rounded-2 min-vh-50 p-3">
                <SelectedComponent />
            </div>
        </div>
    );
};

export default NewsGallery;
