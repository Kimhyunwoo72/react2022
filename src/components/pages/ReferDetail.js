import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

function scroll() {
    window.scrollTo(0,0)
}

class ReferDetail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/reference");
        }
        this.mainAnimation();
    }
    mainAnimation = () => {
        setTimeout(() => {
            scroll()
            
            gsap.to("#header", {
                duration: 0.4,
                top: 0,
                delay: 1,
                ease: "power4.out"
            });
            gsap.to("#footer", {
                duration: 0.4,
                bottom: 0,
                delay: 1.2,
                ease: "power4.out"
            })
            gsap.to(".refer__inner", {
                duration:0.5, 
                opacity: 1,
                delay: 1.6, 
            })
        }, 10)
    }
    render(){
        
        const {location} = this.props;
        console.log(location.state);
        if(location.state === undefined){
            return <div>잘못된 페이지입니다.</div>
        } else {
            return (
                <>
                    <Header />
                    <Contents>
                    <section className="refer__cont">
                        <div className="container">
                            <div className="refer__inner">
                                <div className="refer__table">
                                    <h3>{location.state.title}</h3>
                                    <p>{location.state.desc}</p>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>특징</th>
                                                <th>설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>요소</th>
                                                <td>{location.state.element}</td>
                                            </tr>
                                            <tr>
                                                <th>닫는태그</th>
                                                <td>{location.state.tag}</td>
                                            </tr>
                                            <tr>
                                                <th>사용성</th>
                                                <td>{location.state.use}</td>
                                            </tr>
                                            <tr>
                                                <th>버전</th>
                                                <td>{location.state.version}</td>
                                            </tr>
                                            <tr>
                                                <th>시각적표현</th>
                                                <td>{location.state.view}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <ul>
                                        <li>
                                            <h4>정의 (Definition)</h4>
                                            <ul>
                                                <p>
                                                {location.state.Definition.map((refer) => (
                                                    <li key={refer}>{refer}</li>
                                                ))}
                                                </p>
                                                {/* <p><li>{location.state.Definition}</li></p> */}
                                            </ul>
                                        </li>
                                        <li>
                                            <h4>접근성 (Accessibility)</h4>
                                            <p>{location.state.Accessibility}</p>
                                        </li>
                                        <li>
                                            <h4>참고사이트 (Reference)</h4>
                                            <ul>
                                                <li><a href={location.state.mdn}>MDN</a></li>
                                                <li><a href={location.state.w3c}>W3C</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    </Contents>

                    <Footer/>
                </>
            )
        }
    }
}
export default ReferDetail