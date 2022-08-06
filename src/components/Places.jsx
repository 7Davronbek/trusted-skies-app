import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import 'accordion-js/dist/accordion.min.css';

const Places = (props) => {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  return (
    <>
      <div className="Places">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 place_box">
              <Accordion open={open} toggle={toggle} className="place_acar">
                <AccordionItem className="acar_item">
                  <AccordionHeader targetId="1" className="acar_header">
                    Top Countries
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <a href='' className="acar_text">
                      United States Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      India Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      Italy Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      France Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      United Kingdom Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      Greece Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      Germany Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      Turkey Business Class Flights
                    </a>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="acar_item">
                  <AccordionHeader targetId="2" className="acar_header">
                    Top Cities
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    <a href='' className="acar_text">
                      United States Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      India Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      Italy Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      France Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      United Kingdom Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      Greece Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      Germany Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      Turkey Business Class Flights
                    </a>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="acar_item">
                  <AccordionHeader targetId="3" className="acar_header">
                    Top Airlines
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <a href='' className="acar_text">
                      United States Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      India Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      Italy Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      France Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      United Kingdom Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      Greece Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      Germany Business Class Flights
                    </a>
                    <br />
                    <a href='' className="acar_text">
                      Turkey Business Class Flights
                    </a>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>

              <div className="place_address">
                Luxury Travel Services LLC,
                919 N. Market St., Ste 725,
                Wilmington, DE 19801
              </div>
            </div>
          </div>
        </div>
        <img className='place_img' src="/img/place_1.png" alt="" />
      </div>
    </>
  )
}

export default Places