
import './App.css';
import React, {useState} from 'react';

function App() {
  const [글제목, 글제목변경] = useState(['남자코트 추천', ' 봉리단길 샐러드 맛집', '영화 추천 상견니']);
  const [글클릭, 글클릭변경] = useState(0);
  const [좋아요, 좋아요수정] = useState(
    글제목.map(function(){
    return 0;
  })
  );
  //   좋아요 state에 글제목의 개수만큼 0이 들어가는 배열 생성
  let 좋아요copy = [...좋아요];
  const [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState('');

  function 글수정(){
    let copy = [...글제목];
    copy[0] = '여자코트 추천';
    글제목변경(copy);
        
  }

  function 글삭제(index){
    글제목변경(글제목.filter((el, elIndex) => elIndex === index));
  }

  //return 안에는 병렬로 태그 2개이상 기입 금지 하나의 태그로 시작해서 하나의 태그로 끝난다
  

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      {
        글제목.map(function(i,index){
          return (
            <div className="list" key={index}> 
              <h4 onClick={() => {
                setModal(!modal);
                글클릭변경(index); //글클릭이 해당 index에서 true
                }}>
                {글제목[index]}

                <span onClick={(e) => {
                  e.stopPropagation(); //event 버블링 방지
                  좋아요copy[index] += 1;
                  좋아요수정(좋아요copy);
                }}> 👍
                </span> {좋아요[index]}

              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(index, 1);
                글제목변경(copy);
                }}>글 삭제</button>
            </div>
          )
        })
      }
      <input onChange={(e) => {입력값변경(e.target.value)}}/>
      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
        입력값변경('');
      }}>글 작성하기</button>
      {
        modal ? <Modal 글제목={글제목} 글수정={글수정} 글클릭={글클릭}></Modal> : '' 
      }
      <Modal2></Modal2>

    </div>
  );
}


function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.글제목[props.글클릭]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글수정}>글 수정</button>
    </div>
    );
}


//class 문법 쓰는법
class Modal2 extends React.Component{

  //props 쓰려면 this.props 
  constructor(props){
    super(props);
    //state 만들려면 constuctor에 만들기
    this.state = {
      name: 'kim',
      age: 20
    }
  }
  render(){
    return(
      <div>안녕 {this.state.age}
        <button onClick={() => {
          this.setState({age: 21})
        }}> 버튼 </button>
      </div>
    )
  }
}

export default App;
