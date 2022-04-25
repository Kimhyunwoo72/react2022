import React from 'react'
import ScriptList from "../includes/ScriptList";

function ScriptCon(props) {
    // console.log(props)
  return (
    <section className={`script__cont ${props.color}`}>
        <div className="container">
            <div className="script__inner">
                <ScriptList items={props.lists}  />
                {/* <article>
                    <img src="img/script01.jpg" alt="이미지" />
                    <span className='active'>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <div className="text">
                        <h4>animationRequestFrame</h4>
                        <div className="desc">
                            <p>레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.</p>
                            <p>레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.</p>
                        </div>
                    </div>
                </article> */}
            </div>
        </div>
    </section>
  )
}

export default ScriptCon