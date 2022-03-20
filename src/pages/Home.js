import React,{useEffect,useRef,useState} from 'react'
import styled from 'styled-components'
import Typed from 'typed.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Navigation,
    Pagination
  } from 'swiper';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
SwiperCore.use([Pagination,Navigation]);

export default function Home() {
    const el = useRef(null);
    const typed = useRef(null);
    const [currentIndex , setCurrentIndex] = useState(0);
    const workHistory =  ["iRecruit","ASN Broker","SAHAPAT SPC"];

    useEffect(() => {
        const options = {
            strings: [
                `${workHistory[currentIndex]} Experience Detail`,
          ],
          typeSpeed: 70,
          backSpeed: 50,
          smartBackspace: true 
        };
        typed.current = new Typed(el.current, options);
        return () => {
            typed.current.destroy();
        }
    },[currentIndex])

    return (
        <Container>
            <BrowserContainer>
                <ContainerBar>
                <div>
                    MY RESUMEssss
                </div>
                <div className='btn-wapper'>
                    <span className="dot-resize"></span>
                    <span className="dot-minimize"></span>
                    <span className="dot-exits"></span>
                </div>
                </ContainerBar>
               
                <div style={{position: "relative", width: "100%", height: 0, paddingTop: "141.4286%",
                     paddingBottom: "48px", boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", marginTop: "1.6", marginBottom: "0.9", overflow: "hidden",
                     borderRadius: "3px", willChange: "transform"}}>
                    <iframe loading="lazy" style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0", border: "none", padding: "0",margin: "0"}}
                            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DADYtf-i0W4&#x2F;view?embed" allowFullScreen="allowfullscreen" allow="fullscreen">
                    </iframe>
                </div>
                
            </BrowserContainer>
            <DescriptionContainer>
                <div className='title'>
                    <span ref={el}></span>
                </div>
                <Swiper 
                    loop={true}
                    navigation={true} 
                    onSlideChange={(swiper) => {
                        const {
                            realIndex
                          } = swiper;
                          setCurrentIndex(realIndex);
                    }}
                >
                <SwiperSlide>
                <div className='work-description'>
                    <div className='img'>
                        <img src='/imgs/work.png'  width={250} height={250}/>
                    </div>
                    <div className='description-container'>
                        <p className='work-name'>1. {workHistory[currentIndex]} (Position: Dev)</p>
                        <p className='work-title'>Responsibility Project</p>
                        <p className='project-name'>
                           <span>1. Thai Government Recruit </span>
                        </p>
                        <p className='project-about'>
                            This web application for recruiting goverment employee each goverment unit
                        </p>
                        <p className='project-name'>
                            <span> 2. Student Register </span>
                        </p>
                        <p className='project-about'>
                            This web application for Register Student in Technical College
                        </p>
                        <p className='project-name'>
                            <span>3. Contractor Tracking</span>
                        </p>
                        <p className='project-about'>
                            This web application for tracking contractor because in a day many contractor 
                            start working in factory 
                        </p>
                        <p className='work-title'>Stack and Tools</p>
                        <p>
                           php (Laravel) , MYSQL ,Line Notify
                        </p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='work-description'>
                    <div className='img'>
                        <img src='/imgs/work_2.png'  width={250} height={250}/>
                    </div>
                    <div className='description-container'>
                        <p className='work-name'>2. {workHistory[currentIndex]} (Position: Full-Stack)</p>
                        <p className='work-title'>Responsibility Project</p>
                        <p className='project-name'>
                           <span> 1. Loan System </span> 
                        </p>
                        <p className='project-about'>
                            This web application for customer can be loaner 
                        </p>
                        <p className='work-title'>Stack and Tools</p>
                        <p>
                           php(Laravel) , MYSQL, VueJs , MongoDB
                        </p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='work-description'>
                    <div className='img'>
                        <img src='/imgs/work_3.png'  width={250} height={250}/>
                    </div>
                    <div className='description-container'>
                        <p className='work-name'>3. {workHistory[currentIndex]} (Position: Full-Stack)</p>
                        <p className='work-title'>Responsibility Project</p>
                        <p className='project-name'>
                            <span> 1. MAMA Lucky</span>
                        </p>
                        <p className='project-about'>
                            This web application for register code on instant noodle cup 
                        </p>
                        <p className='project-name'>
                            <span>2. E-commerce SPC</span>
                        </p>
                        <p className='project-about'>
                              Own E-commerce SPC
                        </p>
                        <p className='project-name'>
                            <span>3. Sale System </span>
                        </p>
                        <p className='project-about'>
                            This web application for sale SPC product to retail store
                        </p>
                        <p className='work-title'>Stack and Tools</p>
                        <p>
                           php (Laravel) , Oracel DB ,Line Liff, ReactJs
                        </p>
                    </div>
                </div>
                </SwiperSlide>
                </Swiper>
                
            </DescriptionContainer>
           
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    flex-wrap: wrap;
    margin: 20px;
    gap:50px;
`
const BrowserContainer = styled.div`
    border: 3px solid #f1f1f1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-shadow: 5px 5px 18px #F6F4F4;
    width: 500px;
    
`
const ContainerBar = styled.div`
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items:center;
        padding: 10px;
        background: #f1f1f1;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        .btn-wapper{
            display: flex;
            flex-direction: row;
            align-items:center;
            gap: 7px;
        }
        .dot-exits {
            height: 12px;
            width: 12px;
            background-color: #ff002a;
            border-radius: 50%;
            display: inline-block;
            cursor: pointer;
        }
        .dot-resize {
            height: 12px;
            width: 12px;
            background-color: #FF6817;
            border-radius: 50%;
            display: inline-block;
            cursor: pointer;
        }
        .dot-minimize {
            height: 12px;
            width: 12px;
            background-color: #17adff;
            border-radius: 50%;
            display: inline-block;
            cursor: pointer;
        }
`

const DescriptionContainer = styled.div`
        display: block;
        border: 3px solid;
        width: 600px;
        min-width: 200px;
        height: 750px;
        min-height: 200px;
        border-radius: 4px;
        padding: 20px;
        white-space: normal;
        .swiper-pagination{
            padding-bottom: 10px;
        }
        .swiper-button-next{
            font-size: 20px !important;
        }
        .title{
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        .work-description{
            border: 3px solid;
            margin-bottom: 10px;
            height: 670px;
            border-radius: 4px;
            overflow: overlay;
            ::-webkit-scrollbar {
                width: 5px;
              }
              :-webkit-scrollbar-track {
                background: #f1f1f1; 
              }
               
              /* Handle */
              ::-webkit-scrollbar-thumb {
                background: #888; 
                border-radius: 4px;
              }
              
              /* Handle on hover */
              ::-webkit-scrollbar-thumb:hover {
                background: #555; 
              }
            .img{
                text-align: center;
            }
            .description-container{
                padding-left: 50px;
                padding-right: 50px;
            }
        }
        .work-name{
            font-size: 24px;
            font-weight: bold;
            text-align: center;
        }

        .work-title{
            font-size: 20px;
            font-weight: bold;
        }

        .project-name{
            text-indent: 15px;
            span{
                font-weight: bold;
            }
        }
        .project-about{
            text-indent: 36px; 
        }
`
