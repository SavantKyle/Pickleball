import React from "react";
import {
  onixLogo,
  mbPriceGeneralContractors
  // tChewsLogo, raisingCanesLogo, louisianaFishFryLogo, chimesLogo, cokeLogo,
  // natashaEngleLogo, americanFactoryDirectLogo, superiorConstructionLogo,
  // flemingsLogo, transformyxLogo, crescentCrownLogo, laMadeleineLogo, reginellisLogo, theLondonerLogo
} from "../../assets/logos";

const sponsors = () => {
  const styles = {
    // tChews: { width: "325px" },
    // raisingCanes: { width: "300px", marginTop: "40px" },
    // chimes: { width: "375px", marginTop: "20px" },
    // louisianaFishFry: { width: "300px" },
    // coke: { width: "300px", marginTop: "50px", marginBottom: "40px" },
    // natashaEngle: { width: "400px", marginTop: "0px" },
    // americanFactoryDirect: { width: "550px", marginTop: "20px" },
    // superiorConstruction: { width: "600px", marginTop: "50px" },
    // flemings: { width: "375px", marginTop: "15px" },
    // transformyx: { width: "1000px" },
    // crescent: { width: "175px" },
    // laMadeleine: { width: "300px", marginTop: "25px" },
    // reginelli: { width: "400px", marginTop: "40px" },
    // theLondoner: { width: "300px", marginTop: "20px" }
    onix: { width: 550 },
    mbPrice: { width: 400 }
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
            <a href="http://www.mbpricecontractors.com/" target="_blank" rel="noopener noreferrer">
              <img src={mbPriceGeneralContractors} alt="" style={styles.mbPrice} className="img-responsive center-block"/>
            </a>
          </div>
          {/* <div className="col-md-12">
                        <div className="col-md-4">
                            <a href="https://www.facebook.com/Tchews/" target="_blank" rel="noopener noreferrer">
                                <img src={tChewsLogo} alt="" style={styles.tChews} className="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://www.facebook.com/superiorconstructionla/?ref=br_rs" target="_blank" rel="noopener noreferrer">
                                <img src={superiorConstructionLogo} alt="" style={styles.superiorConstruction} className="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://www.flemingssteakhouse.com/" target="_blank" rel="noopener noreferrer">
                                <img src={flemingsLogo} alt="" style={styles.flemings} className="img-responsive center-block" />
                            </a>
                        </div> 
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <a href="https://www.thechimes.com/" target="_blank" rel="noopener noreferrer">
                                <img src={chimesLogo} alt="" style={styles.chimes} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4"></div>
                    </div>  */}
        </div>
      </div>
      <div className="panel panel-warning text-center">
        <h2 className="panel-heading" style={{ margin: "0px" }}>
          Bronze Level Sponsors
        </h2>
        <div className="panel-body">
          {/* <div className="col-md-12">
                        <div className="col-md-6">
                            <a href="http://www.natashaengle.com" target="_blank" rel="noopener noreferrer">
                                <img src={natashaEngleLogo} alt="" style={styles.natashaEngle} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="http://www.afd-furniture.com/" target="_blank" rel="noopener noreferrer">
                                <img src={americanFactoryDirectLogo} alt="" style={styles.americanFactoryDirect} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12">

                    </div> */}
        </div>
      </div>
      {/* <div className="panel panel-info text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Other Sponsors</h2>
                <div className="panel-body">
                    <div className="col-md-12">

                    </div>
                </div>
            </div> */}
      <div className="panel panel-success text-center">
        <h2 className="panel-heading" style={{ margin: "0px" }}>
          Food and Refreshments Provided By
        </h2>
        <div className="panel-body">
          {/* <div className="col-md-12">
                        <div className="col-md-4">
                            <a href="https://la.crescentcrown.com/" target="_blank" rel="noopener noreferrer">
                                <img src={crescentCrownLogo} alt="" style={styles.crescent} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="http://londonerbr.com" target="_blank" rel="noopener noreferrer">
                                <img src={theLondonerLogo} alt="" style={styles.theLondoner} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="http://www.louisianafishfry.com" target="_blank" rel="noopener noreferrer">
                                <img src={louisianaFishFryLogo} alt="" style={styles.louisianaFishFry} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <a href="https://lamadeleine.com/" target="_blank" rel="noopener noreferrer">
                            <img src={laMadeleineLogo} alt="" style={styles.laMadeleine} class="img-responsive center-block" />
                        </a>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <a href="https://www.raisingcanes.com" target="_blank" rel="noopener noreferrer">
                                <img src={raisingCanesLogo} alt="" style={styles.raisingCanes} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://www.reginellis.com/" target="_blank" rel="noopener noreferrer">
                                <img src={reginellisLogo} alt="" style={styles.reginelli} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://us.coca-cola.com/" target="_blank" rel="noopener noreferrer">
                                <img src={cokeLogo} alt="" style={styles.coke} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default sponsors;
