import React from 'react';
import {
    tChewsLogo, raisingCanesLogo, louisianaFishFryLogo, chimesLogo, cokeLogo, flemingsLogo, onixLogo
} from '../../assets/logos';

const sponsors = () => {
    const styles = {
        tChews: { width: "325px" },
        flemings: { width: "400px" },
        raisingCanes: { width: "300px", marginTop: "40px" },
        chimes: { width: "375px", marginTop: "10px" },
        louisianaFishFry: { width: "300px", marginTop: "20px" },
        coke: { width: "300px", marginTop: "50px", marginBottom: "40px" }, 
        onix: { width: "600px" }
    }

    return (
        <div className="col-md-12 container-fluid">
            <div className="text-center">
                <h2>A very special thanks to all of the sponsors which help to make this event a success!</h2>
                <h3>Please click on logo to help support these great businesses!</h3>
                <br /><br />
                <p>Interested in becoming a sponsor? Please contact Kelly at (225)202-3048.</p>
            </div>
            <div className="panel panel-default text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Presenting Sponsors</h2>
                <div className="panel-body">
                    <div className="col-md-12">
                        <a href="https://www.onixpickleball.com" target="_blank" rel="noopener noreferrer">
                            <img src={onixLogo} alt="" style={styles.onix} className="img-responsive center-block" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="panel panel-danger text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Rose Level Sponsors</h2>
                <div className="panel-body">
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <a href="http://www.tchews.com/" target="_blank" rel="noopener noreferrer">
                                <img src={tChewsLogo} alt="" style={styles.tChews} className="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://www.flemingssteakhouse.com/" target="_blank" rel="noopener noreferrer">
                                <img src={flemingsLogo} alt="" style={styles.flemings} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://www.thechimes.com/" target="_blank" rel="noopener noreferrer">
                                <img src={chimesLogo} alt="" style={styles.chimes} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel panel-warning text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Bronze Level Sponsors</h2>
                <div className="panel-body">
                    <div className="col-md-12">

                    </div>
                    <div className="col-md-12">

                    </div>
                </div>
            </div>
            <div className="panel panel-info text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Other Sponsors</h2>
                <div className="panel-body">
                    <div className="col-md-12">

                    </div>
                </div>
            </div>
            <div className="panel panel-success text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Food and Refreshments Provided By</h2>
                <div className="panel-body">
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <a href="https://www.raisingcanes.com" target="_blank" rel="noopener noreferrer">
                                <img src={raisingCanesLogo} alt="" style={styles.raisingCanes} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="http://www.louisianafishfry.com" target="_blank" rel="noopener noreferrer">
                                <img src={louisianaFishFryLogo} alt="" style={styles.louisianaFishFry} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://us.coca-cola.com/" target="_blank" rel="noopener noreferrer">
                                <img src={cokeLogo} alt="" style={styles.coke} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default sponsors;