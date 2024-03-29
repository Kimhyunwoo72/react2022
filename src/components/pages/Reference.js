import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import ContContact from "../layout/ContContact";
import ReferenceCont from "../includes/ReferenceCont";
import Footer from "../layout/Footer";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";
import ReferCont from "../includes/ReferenceCont";


class Reference extends React.Component {
    //state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리됩니다.
    state = {
        isLoading: true,
        refers: []
    }

    mainAnimation =()=>{
        setTimeout(() => {
            // .main__inner > div:nth-child(1)
            gsap.to("#header", {
                duration:0.4, 
                top:0
            })
            gsap.to("#footer", {
                duration:0.4, 
                bottom:0,
                delay:0.2
            })
            gsap.to(".cont__title strong", {
                duration:0.5, 
                x:0,
                y:0,
                opacity: 1,
                delay: 1,
                ease: "power4.out"
            })
            gsap.to(".cont__title em", {
                duration:0.5, 
                x:0,
                y:0,
                opacity: 1,
                delay: 1.3,
                ease: "power4.out"
            })
            gsap.to(".refer__inner", {
                duration:0.5, 
                opacity: 1,
                delay: 1.6,
            })
        });
    }


    //async & axios는 다 다운받고 실행해라라는 명령어
    getRefers = async ()=>{
        //{ data : { data: {htmlRefer}}} 은 경로의 파일만 가져오게 설정하는 것.
        const {
             data : {
                  data: {htmlRefer},
                },
            } = await axios.get("https://kimhyunwoo72.github.io/react2022/src/assets/json/referencs.json") 
                this.setState({refers: htmlRefer, isLoading: false})
                this.mainAnimation()
    }

    componentDidMount() {
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active")
            document.querySelector("body").style.background = "#000"
            this.getRefers()
        }, 2000);
    }

    render() {
        const {isLoading, refers} = this.state;
        console.log(refers)
        
        return (
            <>
                {isLoading ? (
                    <Loading/>
                ) : (
                    <>
                        <Header/>
                        <Contents>
                            <ContTitle title = {["HTML", "REFERENCE"]}/>
                                {/* <ReferenceCont refers = {refers} color = "light" /> */}
                                <section className="refer__cont">
                                    <div className="container">
                                        <div className="refer__inner">
                                            <h2>CSS</h2>
                                            <ul className="refer__list">
                                                {refers.map((refer)=>(
                                                    <ReferCont 
                                                    key={refer.id}
                                                    id={refer.id}
                                                    title={refer.title}
                                                    desc={refer.desc}
                                                    use={refer.use}
                                                    desc2 ={refer.desc2}
                                                    element ={refer.element}
                                                    tag ={refer.tag}
                                                    view ={refer.view}
                                                    image ={refer.image}
                                                    link ={refer.link}
                                                    Definition ={refer.Definition}
                                                    Accessibility ={refer.Accessibility}
                                                    w3c ={refer.w3c}
                                                    mdn ={refer.mdn}
                                                    version ={refer.version}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            <ContContact />
                            <Footer/>
                        </Contents>
                    </>
                )}
            </>
        )
    }
}

export default Reference;
