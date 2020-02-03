import React from "react";
import {
  onixLogo,
  mbPriceGeneralContractors, 
  americanFactoryDirectLogo, 
  flemingsLogo,
  kickstandsLogo, raisingCanesLogo, louisianaFishFryLogo, cokeLogo,
  crescentCrownLogo,
  hannahQLogo,
  batonRougeDigitalProductsLogo,
  jigsawHealthLogo
} from "../../assets/logos";

const sponsors = () => {
  const styles = {
    kickstands: { width: 225 },
    raisingCanes: { width: 300, marginTop: 40 },
    louisianaFishFry: { width: 325 },
    coke: { width: 300, marginTop: 50, marginBottom: 40 },
    americanFactoryDirect: { width: 550 },
    crescent: { width: 175 },
    onix: { width: 550 },
    flemings: { width: 425, marginTop: 45 },
    mbPrice: { width: 400, marginTop: 40 }, 
    hannahQ: { width: 450, marginTop: 50 }, 
    jigsawHealth: { width: 400 }, 
    batonRougeDigitalProducts: { width: 550, marginTop: 90 }
  };

  return (
    <div className="col-md-12 container-fluid">
      <div className="text-center">
        <h2>
          A very special thanks to all of the sponsors which help to make this
          event a success!
        </h2>
        <h3>Please click on logo to help support these great businesses!</h3>
        <br />
        <br />
        <p>
          Interested in becoming a sponsor? Please contact Kelly at
          (225)202-3048.
        </p>
      </div>
      <div className="panel panel-default text-center">
        <h2 className="panel-heading" style={{ margin: "0px" }}>
          Presenting Sponsors
        </h2>
        {/*    <div className="panel-body">
                    <div className="col-md-12">
                        <a href="http://www.transformyx.com/" target="_blank" rel="noopener noreferrer">
                            <img src={transformyxLogo} alt="" style={styles.transformyx} className="img-responsive center-block" />
                        </a>
                    </div>
                </div> */}
      </div>
      <div className="panel panel-primary text-center">
        <h2 className="panel-heading" style={{ margin: "0px" }}>
          Tournament Balls Provided by 
        </h2>
        <div className="panel-body">
          <div className="col-md-12">
            <a href="https://www.onixpickleball.com" target="_blank" rel="noopener noreferrer">
            <img src={onixLogo} alt="" style={styles.onix} className="img-responsive center-block"/>
            </a>
          </div>
        </div>
      </div>
      <div className="panel panel-danger text-center">
        <h2 className="panel-heading" style={{ margin: "0px" }}>
          Rose Level Sponsors
        </h2>
        <div className="panel-body">
          <div className="col-md-12">
          <div className="col-md-4">
                <a href="http://www.mbpricecontractors.com/" target="_blank" rel="noopener noreferrer">
                  <img src={mbPriceGeneralContractors} alt="" style={styles.mbPrice} className="img-responsive center-block"/>
                </a>
            </div>
            <div className="col-md-4">
                <a href="https://www.facebook.com/Kickstandskitchen/" target="_blank" rel="noopener noreferrer">
                    <img src={kickstandsLogo} alt="" style={styles.kickstands} className="img-responsive center-block" />
                </a>
            </div>
            <div className="col-md-4">
                <a href="https://www.flemingssteakhouse.com/" target="_blank" rel="noopener noreferrer">
                    <img src={flemingsLogo} alt="" style={styles.flemings} className="img-responsive center-block" />
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="panel panel-warning text-center">
        <h2 className="panel-heading" style={{ margin: "0px" }}>
          Bronze Level Sponsors
        </h2>
        <div className="panel-body">
        <div className="col-md-12">
          <div className="col-md-6">
            <a href="http://www.afd-furniture.com/" target="_blank" rel="noopener noreferrer">
                <img src={americanFactoryDirectLogo} alt="" style={styles.americanFactoryDirect} class="img-responsive center-block" />
            </a>
          </div>
          <div className="col-md-6">
            <a href="https://www.brdp.com/" target="_blank" rel="noopener noreferrer">
                <img src={batonRougeDigitalProductsLogo} alt="" style={styles.batonRougeDigitalProducts} class="img-responsive center-block" />
            </a>
          </div>
        </div>
        </div>
      </div>
      <div className="panel panel-success text-center">
        <h2 className="panel-heading" style={{ margin: "0px" }}>
          Food and Refreshments Provided By
        </h2>
        <div className="panel-body">
              <div className="col-md-12">
                <div className="col-md-4">
                    <a href="https://la.crescentcrown.com/" target="_blank" rel="noopener noreferrer">
                        <img src={crescentCrownLogo} alt="" style={styles.crescent} class="img-responsive center-block" />
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="http://www.hannahqsmokehouse.com/" target="_blank" rel="noopener noreferrer">
                        <img src={hannahQLogo} alt="" style={styles.hannahQ} class="img-responsive center-block" />
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="http://www.louisianafishfry.com" target="_blank" rel="noopener noreferrer">
                        <img src={louisianaFishFryLogo} alt="" style={styles.louisianaFishFry} class="img-responsive center-block" />
                    </a>
                </div>
            </div>
              <div className="col-md-12">
                <div className="col-md-6">
                    <a href="https://www.raisingcanes.com" target="_blank" rel="noopener noreferrer">
                        <img src={raisingCanesLogo} alt="" style={styles.raisingCanes} class="img-responsive center-block" />
                    </a>
                </div>
                <div className="col-md-6">
                    <a href="https://us.coca-cola.com/" target="_blank" rel="noopener noreferrer">
                        <img src={cokeLogo} alt="" style={styles.coke} class="img-responsive center-block" />
                    </a>
                </div>
            </div>
        </div>
      </div>
      <div className="panel panel-info text-center">
          <h2 className="panel-heading" style={{ margin: "0px" }}>Other Sponsors</h2>
          <div className="panel-body">
              <div className="col-md-12">
                  <a href="https://www.jigsawhealth.com/" target="_blank" rel="noopener noreferrer">
                      <img src={jigsawHealthLogo} alt="" style={styles.jigsawHealth} class="img-responsive center-block" />
                  </a>
              </div>
          </div>
      </div>
    </div>
  );
};

export default sponsors;
