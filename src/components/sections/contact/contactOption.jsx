import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import React from "react";
import SlideUp from "../../../utlits/animations/slideUp";
import { Link } from "react-router-dom";

const ContactOption = () => {
  return (
    <div className="col-12">
      <SlideUp>
        <div className="contact-content-part">
          <SlideUp delay={1}>
            <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
              <div className="contact-icon">
                <i>
                  {" "}
                  <RiPhoneLine size={20} />
                </i>
              </div>
              <h2>contact number :</h2>
              <p>0305-1251018</p>
            </div>
          </SlideUp>
          <SlideUp delay={2}>
            <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
              <div className="contact-icon">
                <i>
                  {" "}
                  <RiMailLine size={20} />
                </i>
              </div>
              <h2>Email :</h2>
              <p>abdullah.graphitive@gmail.com</p>
            </div>
          </SlideUp>
          <SlideUp delay={3}>
            <div className="single-contact">
              <div className="contact-icon">
                <i>
                  {" "}
                  {/* <RiMapPinLine /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="20"
                    height="20"
                    fill="#eb5d3a"
                  >
                    {" "}
                    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
                  </svg>
                </i>
              </div>
              <h2>Whatsapp :</h2>
              {/* <p>https://www.linkedin.com/in/abdullah-niaz-4b28bb1a8/</p> */}
              <a
                href="https://api.whatsapp.com/send?phone=+923051251018&text=Hi"
                target="_blank"
              >
                0305-1251018
              </a>
            </div>
          </SlideUp>
          <SlideUp delay={4}>
            <div className="single-contact">
              <div className="contact-icon">
                <i>
                  {" "}
                  {/* <RiMapPinLine /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="24"
                    height="24"
                    fill="#eb5d3a"
                  >
                    {" "}
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                  </svg>
                </i>
              </div>
              <h2>Linkedin Url :</h2>
              {/* <p>https://www.linkedin.com/in/abdullah-niaz-4b28bb1a8/</p> */}
              <a
                href="https://www.linkedin.com/in/abdullah-niaz-4b28bb1a8/"
                target="_blank"
              >
                https://www.linkedin.com/in/abdullah-niaz-4b28bb1a8/
              </a>
            </div>
          </SlideUp>
          <SlideUp delay={5}>
            <div className="single-contact">
              <div className="contact-icon">
                <i>
                  {" "}
                  {/* <RiMapPinLine /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="#eb5d3a" // Or any color you like, e.g., "#000" or "#eb5d3a"
                  >
                    <path d="M12 0.296c-6.63 0-12 5.37-12 12 0 5.302 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.018.005 2.045.137 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.628-5.475 5.922.43.372.823 1.104.823 2.222v3.293c0 .322.192.694.801.576C20.565 22.092 24 17.592 24 12.296c0-6.63-5.37-12-12-12z" />
                  </svg>
                </i>
              </div>
              <h2>Github Url :</h2>
              {/* <p>https://www.linkedin.com/in/abdullah-niaz-4b28bb1a8/</p> */}
              <a href="https://github.com/abdul-lahdev" target="_blank">
                https://github.com/abdul-lahdev
              </a>
            </div>
          </SlideUp>
        </div>
      </SlideUp>
    </div>
  );
};

export default ContactOption;
