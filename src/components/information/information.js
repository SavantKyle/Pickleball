import React from "react";

const information = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">Tournament Rules & Information</h1>
      </div>
      <div className="lead text-center">
        <div className="col-md-12">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <h3>
              <strong>Event Coordinator</strong>
            </h3>
            <p>
              Kelly Savant <br />
              <a href="mailto:kellyt515@gmail.com">
                <i className="fa fa-envelope-o"> Email Kelly</i>
              </a>{" "}
              | &nbsp;
              <a href="tel:1-225-202-3048">
                <i className="fa fa-mobile-phone"></i> 225-202-3048
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h3>
              <strong>Tournament Director</strong>
            </h3>
            <p>
              Kyle Savant <br />
              <a href="mailto:kyle.savant@outlook.com">
                <i className="fa fa-envelope-o"> Email Kyle</i>
              </a>{" "}
              | &nbsp;
              <a href="tel:1-225-223-8809">
                <i className="fa fa-mobile-phone"></i> 225-223-8809
              </a>
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="col-md-12">
          <div>
            <h3>
              <strong>Location</strong>
            </h3>
            <p>              
                The Legacy <br />
                <a target="_blank" rel="noopener noreferrer" className="fa fa-map" href="https://www.google.com/maps/place/The+Legacy+at+Bonne+Esperance/@30.4388643,-91.0573409,15z/data=!4m5!3m4!1s0x0:0x6e6a460a077cf89b!8m2!3d30.4388643!4d-91.0573409"> 1655 Sherwood Forest Blvd | Baton Rouge, LA | 70815</a> 
                           
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <h3>
            <strong>Event Date</strong>
          </h3>
          <p>April 25th, 2020</p>
        </div>
        <div className="col-md-12">
          <h3>
            <strong>Final Registration Deadline</strong>
          </h3>
          <p>
            Wednesday, April 8th, 2020 @ 11:59pm [CST] <br />
          </p>
        </div>
        <div className="col-md-12">
          <h3>
            <strong>Registration Fees</strong>
          </h3>
          <div className="col-md-4">
            <p>
              <h3>
                <i>Super Early Bird</i>
              </h3>
              <i>
                <u> January 31st Deadline </u>
              </i>{" "}
              <br />
              $55 per player
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <h3>
                <i>Early Bird</i>
              </h3>
              <i>
                <u> February 29th Deadline </u>
              </i>{" "}
              <br />
              $65 per player
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <h3>
                <i>Procrastinators</i>
              </h3>
              <i>
                <u> After February </u>
              </i>{" "}
              <br />
              $75 per player
            </p>
          </div>
        </div>
        {/* <div className="col-md-12">
                    <h3><strong>Lodging and Accommodations</strong></h3>
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <p>
                            <i>Siegen Inn</i> <br />
                            <a href="tel:1-225-366-6776"><i className="fa fa-phone"></i> 225-366-6776</a> <br />
                            Mention "Crawfish Cup" <br />
                            $70 + tax (first come first served) <br />
                            <a target="_blank" rel="noopener noreferrer" className="fa fa-map" href="https://www.google.com/maps/place/Siegen+Inn/@30.3880554,-91.0631333,17z/data=!3m1!4b1!4m5!3m4!1s0x8626a4d5a9bd7247:0x2b911c1f135fa67d!8m2!3d30.3880508!4d-91.0609446"> 10707 Honore Ln | Baton Rouge, LA | 70809 </a> <br />
                        </p>
                    </div>
                    <div className="col-md-3">
                        <p>
                            <i>Home 2 Suites</i> <br />
                            <a href="tel:1-225-223-6788"><i className="fa fa-phone"></i> 225-223-6788</a> <br />
                            Mention "Crawfish Cup" <br />
                            $110 + tax until April 8th <br />
                            Holding 5 Kings and 10 Queens <br />
                            <a target="_blank" rel="noopener noreferrer" className="fa fa-map" href="https://www.google.com/maps/place/Home2+Suites+by+Hilton+Baton+Rouge/@30.3853535,-91.0599843,15.08z/data=!4m8!1m2!2m1!1shome+2+suites!3m4!1s0x8626a4d3b90421a3:0xa15c2af73d91aab!8m2!3d30.3926632!4d-91.0615911"> 10800 Siegen Holiday Cir | Baton Rouge, LA | 70809 </a> <br />
                        </p>
                    </div>
                    <div className="col-md-3"></div>

                </div> */}

        <div className="col-md-12">
          <h3>
            <strong>Official Tournament Ball</strong>
          </h3>
          <p>Onix Dura Fast 40 (Green)</p>
        </div>

        <div className="col-md-12">
          <h3>
            <strong>Food / Drink</strong>
          </h3>
          <p>Fruits and donuts will be provided for breakfast.</p>
          <p>
            Bottled water will be provided with additional full water coolers
            for hydrating during the match.
          </p>
          <p>
            A local restaurant (TBD) will serve lunch between the morning and
            afternoon sessions.
          </p>
          <p>
            <strong>Crawfish boil</strong> will take place Saturday evening
            following play.
          </p>
          <p>Soft drinks will be provided for the crawfish boil on Saturday.</p>
        </div>

        {/* <div className="col-md-12">
                    <h3><strong>Player Gifts</strong></h3>
                    <p>
                        All players will receive a player gift courtesy of ONIX Pickleball.
                    </p>
                </div> */}
        <div className="col-md-12">
          <h3>
            <strong>Awards</strong>
          </h3>
          <p>
            Prizes will be awarded to teams placing first and second in their
            division.
          </p>
        </div>
        <div className="col-md-12">
          <h3>
            <strong>Event Formats</strong>
            <br />
          </h3>
          <p>
            Saturday Morning - Mens / Womens doubles <br />
            Saturday Afternoon - Mixed doubles
          </p>
          <p>
            Each division will compete in a round-robin. <br />
            <small>
              Round Robin matches consist of 2 games to 11 points (win by 1).
              <br />
              If enough teams register for a particular group then multiple
              divisions will be created and a final playoff between winners of
              each division will take place. <br />
              Final matches will be the first to 15 (win by 2). <br />
            </small>
          </p>
        </div>
        <div className="col-md-12">
          <h3>
            <strong>Events</strong> <br />
            <small>By Age and Skill</small>
          </h3>
          <p>
            AGES: 18+, 35+, 50+, 65+ <br />
            *Must play in the age group of the youngest team member (age as of
            12/31/2020)
          </p>
          <p>
            SKILL: 2.5 (Beginner), 3.0, 3.5, 4.0, Open (4.5 and above) <br />
            *Must play in the skill level of the highest rated team member
          </p>
          <p>
            Age groupings and skill levels may be combined at the discretion of
            the Tournament Director
          </p>
        </div>
        <div className="col-md-12">
          <h3>
            <strong>Weather</strong>
          </h3>
          <p>
            In the event of inclement weather, match format may be changed at
            the discretion of the tournament director. 
            <br/>
            Absolute worst case, play will resume on Sunday morning to complete the tournament.  
          </p>
        </div>
        <div className="col-md-12">
          <h3>
            <strong>Rating</strong>
          </h3>
          <p>
            2020 USAPA Ratings will be used. If you do not have an official
            rating you may self-rate.
          </p>
          <p>
            NOTE: Please self-rate honestly. The tournament director may remove
            teams from standings if deemed to be playing below self-rating.
          </p>
        </div>
        <div className="col-md-12">
          <h3>
            <strong>Refunds</strong>
          </h3>
          <p>
            If you must withdraw from the tournament you will need to find
            someone to take your place.
          </p>
          <p>If you need assistance finding a replacement please contact us.</p>
          <p>Refunds will not be given for withdrawing from the event.</p>
        </div>
      </div>
    </div>
  );
};

export default information;
