// import '../design/Brandpage.css';
// const Brands = {
//   'Two Wheeler Brands': [
//     ['Zodix', 'Zodix.png'],
//     ['Ucal', 'Ucal.png'],
//     ['LIS', 'Lis.png'],
//     ['Endurance', 'endurance.png'],
//     ['Indian Nippon', 'Indian_Nippon.png'],
//     ['Lucus TVS', 'Lucus_TVS.png'],
//     ['Pricol', 'Pricol_logo.png'],
//     ['Uno Minda', 'uno_minda_logo.png'],
//     ['Spark Minda', 'sparkmindaaCC.png'],
//     ['SKF', 'SKF.png'],
//     ['Rico', 'Rico_logo.png']
//   ],
//   'Passenger Vehicle Brands': [
//     ['Anand I Power', 'anad_1.png'],
//     ['Delphi TVS', 'DelphiTVS_logo.png'],
//     ['JK F&P', 'JK_Fenner___JK_Pioneer_logo_1.png'],
//     ['SKF', 'SKF.png'],
//     ['Philips', 'Philips_logo.png'],
//     ['Mahle Behr', 'Ucal.png'],
//     ['Uno Minda', 'uno_minda_logo.png'],
//     ['Sagar Gold', 'Sagar_Gold.png'],
//     ['Valeo', 'Valeo_logo.png'],
//     ['Meko', 'Meko.png'],
//     ['Fitwell', 'FitWell_logo.png'],
//     ['Spark Minda', 'sparkmindaaCC.png'],
//     ['Talbros', 'Talbros_logo.png'],
//     ['Gates', 'Gates_1.png'],
//     ['Wheels India', 'Wheels-India-Limited.png']
//   ],
//   'Commercial Vehicle Brands': [
//     ['Knorr-Bremse', 'Knorr_Bremse_logo.png'],
//     ['Setco Lipe', 'Setco_logo.png'],
//     ['Spicer SVL Dana', 'SpicerSVL_Dana_logo.png'],
//     ['Texspin', 'texspin.png'],
//     ['Gates', 'Gates_1.png'],
//     ['Meko', 'Meko.png'],
//     ['SKF', 'SKF.png'],
//     ['Philips', 'Philips_logo.png'],
//     ['Uno Minda', 'uno_minda_logo.png'],
//     ['Valeo', 'Valeo_logo.png'],
//     ['Fitwell', 'FitWell_logo.png'],
//     ['Spark Minda', 'sparkmindaaCC.png'],
//     ['Talbros', 'Talbros_logo.png'],
//     ['Wheels India', 'Wheels-India-Limited.png'],
//     ['Holset', 'Holset.png'],
//     ['Cummins', 'Cummins_logo_CC.png'],
//     ['Sagar Gold', 'Sagar_Gold.png']
//   ],
//   'Other Brands': [
//     ['Exide Battery', 'Exide.png'],
//     ['Pidilite', 'pidilites.png']
//   ]
// };

// const BrandSection = ({ title, brands }) => {
//   return (
//     <div className="brand-section">
//       <h2 className="brand-title text-center mt-5">{title}</h2>
//       <div className="brand-scroll-wrapper">
//         <div className="brand-scroll-track row-one">
//           {[...brands, ...brands].map(([name, logo], index) => (
//             <div key={index} className="brand-card">
//               <img src={`/Brandpage/${logo}`} alt={name} />
//               <p className="brand-name">{name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const TotalBrands = () => {
//   return (
//     <div className="brands-page my-5 pt-5">
//       <hr />
//       <div className="container border-x">
//         {Object.entries(Brands).map(([title, brands]) => (
//           <BrandSection key={title} title={title} brands={brands} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TotalBrands;

import { useState } from 'react';

const Brands = {
  'Two Wheeler Brands': [
    ['Zodix', 'Zodix.png'],
    ['Ucal', 'Ucal.png'],
    ['LIS', 'Lis.png'],
    ['Endurance', 'endurance.png'],
    ['Indian Nippon', 'Indian_Nippon.png'],
    ['Lucus TVS', 'Lucus_TVS.png'],
    ['Pricol', 'Pricol_logo.png'],
    ['Uno Minda', 'uno_minda_logo.png'],
    ['Spark Minda', 'sparkmindaaCC.png'],
    ['SKF', 'SKF.png'],
    ['Rico', 'Rico_logo.png']
  ],
  'Passenger Vehicle Brands': [
    ['Anand I Power', 'anad_1.png'],
    ['Delphi TVS', 'DelphiTVS_logo.png'],
    ['JK F&P', 'JK_Fenner___JK_Pioneer_logo_1.png'],
    ['SKF', 'SKF.png'],
    ['Philips', 'Philips_logo.png'],
    ['Mahle Behr', 'Ucal.png'],
    ['Uno Minda', 'uno_minda_logo.png'],
    ['Sagar Gold', 'Sagar_Gold.png'],
    ['Valeo', 'Valeo_logo.png'],
    ['Meko', 'Meko.png'],
    ['Fitwell', 'FitWell_logo.png'],
    ['Spark Minda', 'sparkmindaaCC.png'],
    ['Talbros', 'Talbros_logo.png'],
    ['Gates', 'Gates_1.png'],
    ['Wheels India', 'Wheels-India-Limited.png']
  ],
  'Commercial Vehicle Brands': [
    ['Knorr-Bremse', 'Knorr_Bremse_logo.png'],
    ['Setco Lipe', 'Setco_logo.png'],
    ['Spicer SVL Dana', 'SpicerSVL_Dana_logo.png'],
    ['Texspin', 'texspin.png'],
    ['Gates', 'Gates_1.png'],
    ['Meko', 'Meko.png'],
    ['SKF', 'SKF.png'],
    ['Philips', 'Philips_logo.png'],
    ['Uno Minda', 'uno_minda_logo.png'],
    ['Valeo', 'Valeo_logo.png'],
    ['Fitwell', 'FitWell_logo.png'],
    ['Spark Minda', 'sparkmindaaCC.png'],
    ['Talbros', 'Talbros_logo.png'],
    ['Wheels India', 'Wheels-India-Limited.png'],
    ['Holset', 'Holset.png'],
    ['Cummins', 'Cummins_logo_CC.png'],
    ['Sagar Gold', 'Sagar_Gold.png']
  ],
  'Other Brands': [
    ['Exide Battery', 'Exide.png'],
    ['Pidilite', 'pidilites.png']
  ]
};


const TotalBrands = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (category) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };


  return (
    <div className="container my-5 pt-5">
      <hr />
      {Object.entries(Brands).map(([category, brandList]) => {
        const showAll = expanded[category];
        const visibleBrands = showAll ? brandList : brandList.slice(0, 4); // Show 4 by default

        return (
          <div key={category} className="mb-5 mt-5">
            <div className='mb-4' style={{ display: 'inline-block', textAlign: 'left', width: '100%' }}>
              <div style={{
                display: 'inline-block',
                padding: '10px 50px 10px 10px',
                backgroundColor: '#e20102',
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textAlign: 'left',
                // clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'
                clipPath: 'polygon(2% 0%, 80% 0%, 100% 98%, 100% 100%, 0% 100%)'
              }}>
                {category}
              </div>
                 <div style={{
                height: '3px',
                backgroundColor: '#333',
                width: '100%',
              }}></div>
            </div>
            


            <div className="row g-4">
              {visibleBrands.map(([name, logo], idx) => (
                <div key={idx} className="col-6 col-sm-4 col-md-3">
                  <div className="card h-100 border-1 shadow-sm text-center py-4 px-1 rounded-4">
                    <img
                      src={`/Brandpage/${logo}`}
                      alt={name}
                      className="img-fluid mx-auto"
                      style={{ maxHeight: '60px', objectFit: 'contain' }}
                    />
                    <div className="card-body p-2">
                      <h6 className="card-title text-dark small fw-semibold mb-0">{name}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            {brandList.length > 4 && (
              <div className="text-center mt-4">
                <button
                  onClick={() => toggleExpand(category)}
                  className="btn btn-link p-0 text-decoration-none fw-semibold"
                >
                  {showAll ? 'View Less Brands 🔼' :  'View More Brands  🔽'}
                </button>
              </div>
            )}

            {/* <hr className="mt-4" /> */}
          </div>
        );
      })}
    </div>
  );
};

export default TotalBrands;
