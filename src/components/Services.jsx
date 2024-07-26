import React from 'react';
// import 'ionicons/dist/css/ionicons.min.css';
import './ServicesSection.css'; // Import your custom CSS file

const Services = () => {
  return (
    <div className="services-section single-section snipcss-evYyI">
      <div className="row">
        <div className="col-12">
          <div className="section-heading">
            <p className="section-description">Services I offer to my clients</p>
            <h2 className="section-title">My Services</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="single-service">
            <i className="icon service-icon ion-logo-css3"></i>
            <h6 className="service-title">Design Trends</h6>
            <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="single-service">
            <i className="icon service-icon ion-md-images"></i>
            <h6 className="service-title">PSD Design</h6>
            <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="single-service">
            <i className="icon service-icon ion-logo-ionic"></i>
            <h6 className="service-title">Customer Support</h6>
            <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="single-service">
            <i className="icon service-icon ion-logo-wordpress"></i>
            <h6 className="service-title">Web Development</h6>
            <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="single-service rc-mb-0">
            <i className="icon service-icon ion-md-move"></i>
            <h6 className="service-title">Fully Responsive</h6>
            <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="single-service rc-mb-0">
            <i className="icon service-icon ion-ios-rocket"></i>
            <h6 className="service-title">Branding</h6>
            <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
