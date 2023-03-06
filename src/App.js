
import './App.css';
import {useState} from 'react';

function App() {
  const [글제목, 글제목변경] = useState(['남자코트 추천', ' 봉리단길 샐러드 맛집', '영화 추천 상견니']);
  
  const [글클릭, 글클릭변경] = useState(0);

  const [좋아요, 좋아요수정] = useState(
    글제목.map(function(){
    return 0;
  })
  );
  //   좋아요 state에 글제목의 개수만큼 0이 들어가는 배열 생성
  const 좋아요copy = [...좋아요];
  
  const [modal, setModal] = useState(false);

  function 글수정(){
    let copy = [...글제목];
    copy[0] = '여자코트 추천';
    글제목변경(copy);
        
  }

  //return 안에는 병렬로 태그 2개이상 기입 금지 하나의 태그로 시작해서 하나의 태그로 끝난다
  

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={글수정}>글제목 수정
      </button>

      <button onClick={() => {
          let 정렬 = [...글제목];
          글제목변경(정렬.sort());

        }}>가나다 정렬
      </button>

      {
        글제목.map(function(i,index){
          return (
            <div className="list" key={index}> 
              <h4 onClick={() => {
                setModal(!modal);
                글클릭변경(index); //글클릭이 해당 index에서 true
                }}>
                {글제목[index]}
                <span onClick={() => {
                  좋아요copy[index] += 1;
                  좋아요수정(좋아요copy);
                }}> 👍
                </span> {좋아요[index]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal ? <Modal 글제목={글제목} 글수정={글수정} 글클릭={글클릭}></Modal> : '' 
      }

    </div>
  );
}

function Modal(props){
// let index = null;
//   for(let i = 0; i < props.글클릭.length; i++){
//     if(props.글클릭[i]){
//       index = i;
//     }
//   }

  return (
    <div className='modal'>
      <h4>{props.글제목[props.글클릭]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글수정}>글 수정</button>
    </div>
    );
  


}

export default App;
