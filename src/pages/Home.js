import React,{useEffect,useRef} from 'react'
import styled from 'styled-components'
import Typed from 'typed.js';
export default function Home() {
    const el = useRef(null);
    const typed = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
            'Experience Detail',
          ],
          typeSpeed: 100,
          backSpeed: 50,
          smartBackspace: true 
        };
        typed.current = new Typed(el.current, options);
        return () => {
            typed.current.destroy();
        }
    })

    return (
        <Container>
            <BrowserContainer>
                <ContainerBar>
                <div>
                    MY RESUME
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
                <div className='work-description'>
                    <div className='img-left'>
                        <img src='/imgs/work.png'  width={250} height={250}/>
                    </div>
                    <div>
                        <p className='work-name'>1.iRecruit (Position: Dev)</p>
                        <p className='work-title'>Responsibility Project</p>
                        <p className='project-name'>
                           1. Thai Government Register 
                        </p>
                        <p className='project-name'>
                           2. Student Register 
                        </p>
                        <p className='project-name'>
                           3. Contractor Tracking
                        </p>
                        <p className='work-title'>Stack && Tools</p>
                        <p>
                           php (Laravel) , MYSQL ,Line Notify
                        </p>
                        

                    </div>
                </div>
                <div className='work-description'>
                    <div className='img-right'>
                        <img src='/imgs/work_2.png'  width={250} height={250}/>
                    </div>
                    <div>
                        <p className='work-name'>1.iRecruit (Position: Dev)</p>
                        <p className='work-title'>Responsibility Project</p>
                        <p className='project-name'>
                           1. Thai Government Register 
                        </p>
                        <p className='project-name'>
                           2. Student Register 
                        </p>
                        <p className='project-name'>
                           3. Contractor Tracking
                        </p>
                        <p className='work-title'>Stack && Tools</p>
                        <p>
                           php (Laravel) , MYSQL ,Line Notify
                        </p>
                    </div>
                </div>
                <div className='work-description'>
                    <div className='img-left'>
                        <img src='/imgs/work_3.png'  width={250} height={250}/>
                    </div>
                    <div>
                        <p className='work-name'>1.iRecruit (Position: Dev)</p>
                        <p className='work-title'>Responsibility Project</p>
                        <p className='project-name'>
                           1. Thai Government Register 
                        </p>
                        <p className='project-name'>
                           2. Student Register 
                        </p>
                        <p className='project-name'>
                           3. Contractor Tracking
                        </p>
                        <p className='work-title'>Stack && Tools</p>
                        <p>
                           php (Laravel) , MYSQL ,Line Notify
                        </p>
                        

                    </div>
                </div>
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
        display: flex;
        flex-direction: column;
        justify-content:start;
        border: 3px solid;
        width: 600px;
        height: 750px;
        border-radius: 4px;
        padding: 20px;
        overflow: overlay;

        ::-webkit-scrollbar {
            width: 10px;
          }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #17adff; 
            border-radius: 4px;
        }
          
        ::-webkit-scrollbar-thumb:hover {
            background: #28a4e9; 
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
            padding: 10px;
            border-radius: 4px;
                .img-left{
                    float:left;
                }
                .img-right{
                    float:right;
                }
        }
        .work-name{
            font-size: 20px;
            font-weight: bold;
        }

        .work-title{
            font-weight: bold;
        }

        .project-name{
            font-weight: bold;
            text-indent: 20px;
        }
`
