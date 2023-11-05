import Image from 'next/image'
import { client} from './utils/configSanity';


interface IhealthCare{
  title:string;
  content:string;
}
async function getdata() {
  const query=`*[_type=='health-care']`;
const data=await client.fetch(query);
//console.log(data);
return data as IhealthCare[]; 
}

export default async function Home() {
  const data=(await getdata()) as IhealthCare[];
  return(<div className="homepage-desktop">
  <div className="services">
    <svg
      className="group-366"
      width="1171"
      height="1030"
      viewBox="0 0 1171 1030"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1171 1030L0 1030L6.41966e-05 98.7166L1171 98.7167L1171 1030Z"
        fill="#1E4372"
      />
      <path d="M1171 99H1L1171 0L1171 99Z" fill="#1E4372" />
    </svg>

    <div className="label-title-desc">
      <div className="label">CLINICAL SERVICES </div>
      <div className="title">Discover our services </div>
    </div>
    <div className="quote">
      <div className="card"></div>
      <div className="frame-4770">
        <div className="group-26">
          <div className="frame-4726">
            <div className="general-practice-services">
            {data[1]?.title}{" "}{" "}
            </div>
            <div className="explore-our-range-of-gp-services-such-as-gp-statutory-check-ups-and-vaccinations">
            {data[1]?.content}{" "}{" "}
            </div>
          </div>
        </div>
      </div>
      <img className="image-362" src="/images/general_practical_services.png" alt="general practical services" />
      <div className="button">
        <div className="text">View all GP services </div>
        <svg
          className="angle-right"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4411 8.46721C10.6863 8.21429 10.6863 7.79274 10.4411 7.51171L6.73653 3.6897C6.46413 3.43677 6.05554 3.43677 5.81038 3.6897L5.18387 4.33607C4.93871 4.6171 4.93871 5.03864 5.18387 5.29157L7.82612 8.01756L5.18387 10.7155C4.93871 10.9684 4.93871 11.3899 5.18387 11.671L5.81038 12.2892C6.05554 12.5703 6.46413 12.5703 6.73653 12.2892L10.4411 8.46721Z"
            fill="#A78148"
          />
        </svg>
      </div>
    </div>
    <div className="quote2">
      <div className="card"></div>
      <div className="frame-47702">
        <div className="group-262">
          <div className="frame-47262">
            <div className="dental-services">{data[0]?.title}{" "} </div>
            <div className="explore-our-range-of-dental-services-such-as-routine-dental-check-up-tooth-extraction-dental-fillings-scaling-and-polishing">
            {data[0]?.content}{" "}{" "}
            </div>
          </div>
        </div>
      </div>
      <img className="image-40" src="images/dental_services.png" alt="dental services" />
      <div className="button2">
        <div className="text">View all dental services </div>
        <svg
          className="angle-right2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4411 8.46721C10.6863 8.21429 10.6863 7.79274 10.4411 7.51171L6.73653 3.6897C6.46413 3.43677 6.05554 3.43677 5.81038 3.6897L5.18387 4.33607C4.93871 4.6171 4.93871 5.03864 5.18387 5.29157L7.82612 8.01756L5.18387 10.7155C4.93871 10.9684 4.93871 11.3899 5.18387 11.671L5.81038 12.2892C6.05554 12.5703 6.46413 12.5703 6.73653 12.2892L10.4411 8.46721Z"
            fill="#A78148"
          />
        </svg>
      </div>
    </div>
  </div>
  <div className="hero">
    <svg
      className="background2"
      width="1168"
      height="542"
      viewBox="0 0 1168 542"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1168 0H2.28882e-05V433.061H9.98443e-05L3.05176e-05 542L1163.11 433.061H1168V432.603V0Z"
        fill="#004320"
      />
    </svg>

    <div className="frame-4716">
      <div className="removing-barriers-to-access-greater-healthcare-for-all">
        Removing barriers to access, <br />
        greater healthcare for all{" "}
      </div>
      <div className="button3">
        <div className="text2">Find out more </div>
        <svg
          className="angle-right3"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4411 8.46721C10.6863 8.21429 10.6863 7.79274 10.4411 7.51171L6.73653 3.6897C6.46413 3.43677 6.05554 3.43677 5.81038 3.6897L5.18387 4.33607C4.93871 4.6171 4.93871 5.03864 5.18387 5.29157L7.82612 8.01756L5.18387 10.7155C4.93871 10.9684 4.93871 11.3899 5.18387 11.671L5.81038 12.2892C6.05554 12.5703 6.46413 12.5703 6.73653 12.2892L10.4411 8.46721Z"
            fill="#E5D9C8"
          />
        </svg>
      </div>
    </div>
    <img className="image-360" src="images/image-360.png" alt="image-360" />
  </div>
  <div className="footer-desktop">
    <div className="rectangle-55"></div>
    <div className="footer-links">
      <div className="social-icons">
        <div className="group-115">
          <div className="ellipse-13"></div>
          <svg
            className="social"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5723 4.99023H13.9844V2.60547C13.7412 2.57324 12.9033 2.5 11.9277 2.5C9.8916 2.5 8.49707 3.74219 8.49707 6.02441V8.125H6.25V10.791H8.49707V17.5H11.251V10.791H13.4072L13.75 8.125H11.251V6.28809C11.251 5.51758 11.4648 4.99023 12.5723 4.99023Z"
              fill="#212932"
            />
          </svg>
        </div>
        <div className="group-114">
          <div className="ellipse-14"></div>
          <svg
            className="social2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0017 6.15419C7.8734 6.15419 6.15672 7.87125 6.15672 10C6.15672 12.1288 7.8734 13.8458 10.0017 13.8458C12.13 13.8458 13.8466 12.1288 13.8466 10C13.8466 7.87125 12.13 6.15419 10.0017 6.15419ZM10.0017 12.5003C8.62633 12.5003 7.50195 11.379 7.50195 10C7.50195 8.621 8.62298 7.49972 10.0017 7.49972C11.3804 7.49972 12.5014 8.621 12.5014 10C12.5014 11.379 11.377 12.5003 10.0017 12.5003ZM14.9007 5.99688C14.9007 6.49559 14.4992 6.8939 14.0039 6.8939C13.5053 6.8939 13.1071 6.49225 13.1071 5.99688C13.1071 5.50151 13.5086 5.09985 14.0039 5.09985C14.4992 5.09985 14.9007 5.50151 14.9007 5.99688ZM17.4473 6.90729C17.3904 5.70568 17.116 4.6413 16.2359 3.76436C15.3592 2.88743 14.295 2.61296 13.0937 2.55272C11.8555 2.48243 8.14445 2.48243 6.9063 2.55272C5.70831 2.60962 4.64417 2.88408 3.76408 3.76102C2.88399 4.63796 2.61294 5.70233 2.5527 6.90394C2.48243 8.14236 2.48243 11.8543 2.5527 13.0927C2.60959 14.2943 2.88399 15.3587 3.76408 16.2356C4.64417 17.1126 5.70496 17.387 6.9063 17.4473C8.14445 17.5176 11.8555 17.5176 13.0937 17.4473C14.295 17.3904 15.3592 17.1159 16.2359 16.2356C17.1127 15.3587 17.3871 14.2943 17.4473 13.0927C17.5176 11.8543 17.5176 8.14571 17.4473 6.90729ZM15.8477 14.4215C15.5867 15.0775 15.0814 15.583 14.4222 15.8474C13.435 16.239 11.0926 16.1486 10.0017 16.1486C8.91076 16.1486 6.56497 16.2356 5.58115 15.8474C4.92526 15.5863 4.41997 15.0809 4.15561 14.4215C3.76408 13.4341 3.85443 11.0912 3.85443 10C3.85443 8.90885 3.76743 6.56253 4.15561 5.57849C4.41662 4.92246 4.92192 4.41705 5.58115 4.15263C6.56832 3.76102 8.91076 3.85139 10.0017 3.85139C11.0926 3.85139 13.4384 3.76436 14.4222 4.15263C15.0781 4.4137 15.5834 4.91911 15.8477 5.57849C16.2393 6.56588 16.1489 8.90885 16.1489 10C16.1489 11.0912 16.2393 13.4375 15.8477 14.4215Z"
              fill="#212932"
            />
          </svg>
        </div>
        <div className="group-113">
          <div className="ellipse-15"></div>
          <svg
            className="social3"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.54792 16.25H3.95643V7.90458H6.54792V16.25ZM5.25078 6.76618C4.42228 6.76618 3.75 6.0798 3.75 5.25112C3.75 4.42243 4.42228 3.75 5.25078 3.75C6.07928 3.75 6.75156 4.42243 6.75156 5.25112C6.75156 6.0798 6.07928 6.76618 5.25078 6.76618ZM16.2472 16.25H13.6613V12.1875C13.6613 11.2193 13.6418 9.97768 12.3139 9.97768C10.9666 9.97768 10.7602 11.0296 10.7602 12.1177V16.25H8.17145V7.90458H10.6569V9.04297H10.6932C11.0391 8.38728 11.8843 7.69531 13.1452 7.69531C15.7674 7.69531 16.25 9.42243 16.25 11.6657V16.25H16.2472Z"
              fill="#212932"
            />
          </svg>
        </div>
      </div>
      <div className="terms-of-service">Terms of Service </div>
      <div className="privacy-policy">Privacy Policy </div>
    </div>
    <div className="line-12"></div>
    <div className="language">
      <svg
        className="globe-outline"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 4C5.79032 4 4 5.79032 4 8C4 10.2097 5.79032 12 8 12C10.2097 12 12 10.2097 12 8C12 5.79032 10.2097 4 8 4ZM10.8919 6.58065H9.80806C9.7 5.99194 9.52581 5.47097 9.30484 5.05323C9.99677 5.35968 10.5581 5.90323 10.8919 6.58065ZM8 4.77419C8.3 4.77419 8.78387 5.43871 9.01935 6.58065H6.98065C7.21613 5.43871 7.7 4.77419 8 4.77419ZM4.77419 8C4.77419 7.77903 4.79677 7.5629 4.83871 7.35484H6.09194C6.07581 7.56613 6.06452 7.77903 6.06452 8C6.06452 8.22097 6.07581 8.43387 6.09194 8.64516H4.83871C4.79677 8.4371 4.77419 8.22097 4.77419 8ZM5.10806 9.41935H6.19194C6.3 10.0081 6.47419 10.529 6.69516 10.9468C6.00323 10.6403 5.44194 10.0968 5.10806 9.41935ZM6.19194 6.58065H5.10806C5.44194 5.90323 6.00323 5.35968 6.69516 5.05323C6.47419 5.47097 6.3 5.99194 6.19194 6.58065ZM8 11.2258C7.7 11.2258 7.21613 10.5613 6.98065 9.41935H9.02097C8.78387 10.5613 8.3 11.2258 8 11.2258ZM9.13065 8.64516H6.86935C6.85161 8.43871 6.83871 8.22581 6.83871 8C6.83871 7.77419 6.85161 7.56129 6.86935 7.35484H9.13226C9.15 7.56129 9.1629 7.77419 9.1629 8C9.1629 8.22581 9.14839 8.43871 9.13065 8.64516ZM9.30484 10.9468C9.52581 10.529 9.69839 10.0081 9.80806 9.41935H10.8919C10.5581 10.0968 9.99677 10.6403 9.30484 10.9468ZM9.90806 8.64516C9.92419 8.43387 9.93548 8.22097 9.93548 8C9.93548 7.77903 9.92419 7.56613 9.90806 7.35484H11.1613C11.2032 7.5629 11.2258 7.77903 11.2258 8C11.2258 8.22097 11.2032 8.4371 11.1613 8.64516H9.90806Z"
          fill="#D3D4D6"
        />
      </svg>

      <div className="frame-65">
        <div className="frame-63">
          <div className="malaysia">Language </div>
          <div className="line-13"></div>
        </div>
        <div className="frame-64">
          <div className="bm">EN </div>
          <svg
            className="angle-down"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.81435 9.92126C7.92356 10.0262 8.07644 10.0262 8.18565 9.92126L11.4181 6.83465C11.5273 6.75066 11.5273 6.58268 11.4181 6.47769L10.9813 6.07874C10.8939 5.97375 10.7192 5.97375 10.61 6.07874L8.01092 8.55643L5.39002 6.07874C5.28081 5.97375 5.12793 5.97375 5.01872 6.07874L4.5819 6.47769C4.4727 6.58268 4.4727 6.75066 4.5819 6.83465L7.81435 9.92126Z"
              fill="#909498"
            />
          </svg>
        </div>
      </div>
    </div>
    <div className="group-364">
      <div className="frame-4858">
        <div className="gp-services">GP Services </div>
        <div className="dental-services2">Dental Services </div>
        <div className="about-us">About Us </div>
        <div className="contact-us">Contact Us </div>
      </div>
    </div>
  </div>
  <div className="subscribe">
    <div className="frame-4731">
      <svg
        className="email"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.03959 11.3197C5.47553 23.0102 6.4154 40.2959 6.67537 51.8303L4.42767 49.5066C20.3975 50.5585 36.6954 51.5384 52.6892 52.1543C54.9889 52.2423 57.2886 52.2983 59.5883 52.3383L58.1445 53.7341C57.0367 39.6239 56.8887 25.4578 57.2766 11.3197L59.5403 13.5834C46.602 13.7994 32.096 13.0875 19.1657 12.6915C15.2422 12.5276 9.67897 12.3356 5.7075 12.1396C4.69563 12.0876 4.65164 10.5718 5.7075 10.4998C18.6138 9.88791 33.1038 9.47197 46.0821 9.10402C50.5655 9.00003 55.0529 8.95604 59.5403 9.05603C60.7841 9.08402 61.776 10.0959 61.804 11.3197C62.192 25.4578 62.044 39.6239 60.9361 53.7341C60.9321 54.522 60.2842 55.1779 59.4923 55.1299C56.1848 54.9619 52.4773 54.8259 49.1457 54.7219C39.0311 54.47 28.2205 54.318 18.0818 54.226C13.4785 54.178 8.87507 54.154 4.27169 54.154C3.09185 54.154 2.12397 53.2381 2.04399 52.0783C1.928 50.5305 2.11598 48.3388 2.15997 46.763L2.37194 41.6997C2.62391 35.2685 3.37181 17.9708 3.65577 11.3197C3.71576 10.4558 4.97959 10.4358 5.03959 11.3197Z"
          fill="#005427"
        />
        <path
          d="M5.29156 11.9837L33.2158 29.2854H30.2242L58.0045 11.8317C58.4125 11.5758 58.9524 11.6998 59.2084 12.1077C59.4483 12.4877 59.3524 12.9836 59.0084 13.2596C59.0084 13.2636 33.2118 33.5448 33.2078 33.5488C32.316 34.2528 31.0761 34.2208 30.2242 33.5408L4.50367 13.1036C3.85576 12.5756 4.54766 11.5318 5.29156 11.9797V11.9837Z"
          fill="#005427"
        />
      </svg>

      <div className="frame-4730">
        <div className="frame-4727">
          <div className="don-t-miss-out-on-healthier-living">
            Don’t miss out on healthier living{" "}
          </div>
          <div className="subscribe-to-our-mailing-list-and-get-the-latest-news-on-events-and-health-packages-delivered-direct-to-your-mailbox">
            Subscribe to our mailing list and get the latest news on events
            and health packages delivered direct to your mailbox.{" "}
          </div>
        </div>
        <div className="frame-4729">
          <div className="email-address">Email address </div>
          <div className="frame-4728">
            <div className="rectangle-39"></div>
            <div className="button4">
              <div className="button5">Subscribe </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="frame-4859">
    <div className="getting-here">
      <svg
        className="background3"
        width="984"
        height="549"
        viewBox="0 0 984 549"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M984 0H0V437H984V0ZM5.8651e-05 437L0 549L984 437H5.8651e-05Z"
          fill="#851A39"
        />
      </svg>

      <div className="frame-4741">
        <div className="frame-4740">
          <div className="label-title-desc2">
            <div className="label2">OUR LOCATIONS </div>
            <div className="title2">
              Good health is just around the corner{" "}
            </div>
          </div>
          <div className="content">
            <div className="list-hover">
              <div className="frame-4860">
                <div className="stamford-medical-group-main-branch">
                  Stamford Medical Group <br />
                  (Main Branch){" "}
                </div>
                <svg
                  className="angle-up"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4474 8.45586C12.1842 8.19095 11.8158 8.19095 11.5526 8.40288L5.44737 14.6547C5.18421 14.9197 5.18421 15.3435 5.44737 15.5554L5.81579 15.9263C6.07895 16.1912 6.44737 16.1912 6.71052 15.9263L12.0263 10.5222L17.2895 15.9263C17.5526 16.1912 17.921 16.1912 18.1842 15.9263L18.5526 15.5554C18.8158 15.3435 18.8158 14.9197 18.5526 14.6547L12.4474 8.45586Z"
                    fill="#212932"
                  />
                </svg>
              </div>
              <div className="_681-race-course-rd-01-303-singapore-210681">
                681 Race Course Rd, #01-303, Singapore 210681{" "}
              </div>
              <div className="frame-4738">
                <div className="frame-4779">
                  <svg
                    className="phone"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.34914 3.54263L6.7007 2.7692C7.06486 2.68541 7.43869 2.87554 7.58693 3.21715L9.13381 6.82652C9.26916 7.14234 9.17893 7.51295 8.91144 7.72886L6.95852 9.3273C8.11867 11.7991 10.1457 13.8551 12.6691 15.0378L14.2675 13.0849C14.4866 12.8174 14.854 12.7272 15.1698 12.8626L18.7792 14.4094C19.124 14.5609 19.3142 14.9347 19.2304 15.2989L18.457 18.6504C18.3764 18.9985 18.067 19.2499 17.7029 19.2499C9.44963 19.2499 2.74973 12.5628 2.74973 4.29674C2.74973 3.9358 2.99787 3.6232 3.34914 3.54263Z"
                      fill="#212932"
                    />
                  </svg>

                  <div className="text3"></div>
                  <div className="_65-6226-5502">+65 6226 5502</div>
                </div>
              </div>
            </div>
            <div className="list-hover">
              <div className="frame-4860">
                <div className="stamford-medical-dental-centre">
                  Stamford Medical &amp; Dental Centre{" "}
                </div>
                <svg
                  className="angle-up2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4474 8.45586C12.1842 8.19095 11.8158 8.19095 11.5526 8.40288L5.44737 14.6547C5.18421 14.9197 5.18421 15.3435 5.44737 15.5554L5.81579 15.9263C6.07895 16.1912 6.44737 16.1912 6.71052 15.9263L12.0263 10.5222L17.2895 15.9263C17.5526 16.1912 17.921 16.1912 18.1842 15.9263L18.5526 15.5554C18.8158 15.3435 18.8158 14.9197 18.5526 14.6547L12.4474 8.45586Z"
                    fill="#212932"
                  />
                </svg>
              </div>
              <div className="_682-race-course-rd-01-325-singapore-210682">
                682 Race Course Rd, #01-325, Singapore 210682
              </div>
              <div className="frame-4738">
                <div className="closed-on-weekends-and-public-holidays">
                  Closed on weekends and public holidays{" "}
                </div>
                <div className="frame-4779">
                  <svg
                    className="phone2"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.34914 3.54263L6.7007 2.7692C7.06486 2.68541 7.43869 2.87554 7.58693 3.21715L9.13381 6.82652C9.26916 7.14234 9.17893 7.51295 8.91144 7.72886L6.95852 9.3273C8.11867 11.7991 10.1457 13.8551 12.6691 15.0378L14.2675 13.0849C14.4866 12.8174 14.854 12.7272 15.1698 12.8626L18.7792 14.4094C19.124 14.5609 19.3142 14.9347 19.2304 15.2989L18.457 18.6504C18.3764 18.9985 18.067 19.2499 17.7029 19.2499C9.44963 19.2499 2.74973 12.5628 2.74973 4.29674C2.74973 3.9358 2.99787 3.6232 3.34914 3.54263Z"
                      fill="#212932"
                    />
                  </svg>

                  <div className="text3"></div>
                  <div className="_65-6322-6350">+65 6322 6350</div>
                </div>
              </div>
            </div>
            <div className="list-hover">
              <div className="frame-4860">
                <div className="stamford-westlite-toh-guan">
                  Stamford Westlite Toh Guan{" "}
                </div>
                <svg
                  className="angle-up3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4474 8.45586C12.1842 8.19095 11.8158 8.19095 11.5526 8.40288L5.44737 14.6547C5.18421 14.9197 5.18421 15.3435 5.44737 15.5554L5.81579 15.9263C6.07895 16.1912 6.44737 16.1912 6.71052 15.9263L12.0263 10.5222L17.2895 15.9263C17.5526 16.1912 17.921 16.1912 18.1842 15.9263L18.5526 15.5554C18.8158 15.3435 18.8158 14.9197 18.5526 14.6547L12.4474 8.45586Z"
                    fill="#212932"
                  />
                </svg>
              </div>
              <div className="_28-toh-guan-road-east-westlite-dormitory-01-01-mezzanine-floor-singapore-608596">
                28 Toh Guan Road East, Westlite Dormitory 01-01, Mezzanine
                Floor, Singapore 608596{" "}
              </div>
              <div className="frame-4861">
                <div className="closed-on-sunday-and-public-holidays">
                  Closed on Sunday and public holidays{" "}
                </div>
                <div className="frame-4779">
                  <svg
                    className="phone3"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.34914 3.54263L6.7007 2.7692C7.06486 2.68541 7.43869 2.87554 7.58693 3.21715L9.13381 6.82652C9.26916 7.14234 9.17893 7.51295 8.91144 7.72886L6.95852 9.3273C8.11867 11.7991 10.1457 13.8551 12.6691 15.0378L14.2675 13.0849C14.4866 12.8174 14.854 12.7272 15.1698 12.8626L18.7792 14.4094C19.124 14.5609 19.3142 14.9347 19.2304 15.2989L18.457 18.6504C18.3764 18.9985 18.067 19.2499 17.7029 19.2499C9.44963 19.2499 2.74973 12.5628 2.74973 4.29674C2.74973 3.9358 2.99787 3.6232 3.34914 3.54263Z"
                      fill="#212932"
                    />
                  </svg>

                  <div className="text3"></div>
                  <div className="_65-6322-6350">+65 6322 6350</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="image-358" src="images/image-358.png" />
      </div>
    </div>
  </div>
  <div className="header-desktop">
    <div className="navbar-desktop">
      <div className="main-nav">
        <div className="logo-nav-item">
          <img
            className="stamford-medical-logo-1"
            src="images/logo.png"
            alt='Logo'
          />
          <div className="nav-item">
            <div className="navbar-item">
              <div className="navbar-item2">GP Services </div>
            </div>
            <div className="navbar-item3">
              <div className="navbar-item2">Dental Services </div>
            </div>
            <div className="navbar-item4">
              <div className="navbar-item2">Contact Us </div>
            </div>
            <div className="navbar-item5">
              <div className="navbar-item2">About Us </div>
            </div>
            <div className="group-4844">
              <div className="button6">
                <div className="group-128">
                  <svg
                    className="phone4"
                    width="17"
                    height="19"
                    viewBox="0 0 17 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5834 13.2754V15.5775C15.5842 15.7912 15.5438 16.0027 15.4647 16.1985C15.3857 16.3944 15.2698 16.5701 15.1244 16.7146C14.9791 16.8591 14.8075 16.9691 14.6206 17.0375C14.4337 17.106 14.2357 17.1314 14.0392 17.1122C11.8596 16.8556 9.76585 16.0487 7.9263 14.7564C6.21485 13.5782 4.76383 12.0063 3.6763 10.1522C2.47921 8.15035 1.73423 5.87112 1.50172 3.49922C1.48402 3.28701 1.5073 3.07315 1.57008 2.87123C1.63285 2.66931 1.73375 2.48376 1.86635 2.3264C1.99894 2.16904 2.16033 2.04331 2.34024 1.95722C2.52015 1.87113 2.71463 1.82657 2.9113 1.82637H5.0363C5.38006 1.8227 5.71332 1.95458 5.97397 2.19741C6.23461 2.44025 6.40486 2.77747 6.45297 3.14623C6.54266 3.88295 6.709 4.60631 6.9488 5.30251C7.04411 5.57717 7.06473 5.87567 7.00824 6.16263C6.95174 6.4496 6.8205 6.71301 6.63005 6.92165L5.73047 7.89619C6.73882 9.81732 8.20713 11.408 9.98047 12.5004L10.8801 11.5258C11.0726 11.3195 11.3158 11.1773 11.5807 11.1161C11.8456 11.0549 12.1211 11.0773 12.3746 11.1805C13.0173 11.4403 13.685 11.6205 14.3651 11.7177C14.7091 11.7702 15.0234 11.958 15.248 12.2452C15.4726 12.5324 15.592 12.8991 15.5834 13.2754Z"
                      fill="white"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="call-us">Call Us </div>
                <div className="line-85"></div>
                <svg
                  className="icon-chevron-down2"
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.68175 6.8622C5.86895 7.04593 6.13104 7.04593 6.31825 6.8622L11.8596 1.46063C12.0468 1.31365 12.0468 1.01969 11.8596 0.835958L11.1108 0.137795C10.961 -0.0459318 10.6615 -0.0459318 10.4743 0.137795L6.01872 4.47375L1.52574 0.137795C1.33853 -0.0459318 1.07644 -0.0459318 0.889236 0.137795L0.140406 0.835958C-0.0468019 1.01969 -0.0468019 1.31365 0.140406 1.46063L5.68175 6.8622Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="group-363"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
}
