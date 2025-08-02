import '../design/Brandpage.css';
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

const BrandSection = ({ title, brands }) => {
  return (
    <div className="brand-section">
      <h2 className="brand-title text-center mt-5">{title}</h2>
      <div className="brand-scroll-wrapper">
        <div className="brand-scroll-track row-one">
          {[...brands, ...brands].map(([name, logo], index) => (
            <div key={index} className="brand-card">
              <img src={`/public/Brandpage/${logo}`} alt={name} />
              <p className="brand-name">{name}</p>
            </div>
          ))}
        </div>
        {/* {brands.length > 4 && (
          <div className="brand-scroll-track row-two">
            {[...brands, ...brands].map(([name, logo], index) => (
              <div key={index + 100} className="brand-card">
                <img src={`/Brandpage/${logo}`} alt={name} />
                <p className="brand-name">{name}</p>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

const TotalBrands = () => {
  return (
    <div className="brands-page my-5 pt-5">
      <hr />
      <div className="container border-x">
        {Object.entries(Brands).map(([title, brands]) => (
          <BrandSection key={title} title={title} brands={brands} />
        ))}
      </div>
    </div>
  );
};

export default TotalBrands;
