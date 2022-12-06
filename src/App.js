import Hello from "./Hello";
import './App.css';


function App() {
    const name = 'react';
    const style = {
        backgroundColor : "black",
        color : 'aqua',
        fontSize : 24,
        padding : '1rem'
    };
  return (
      // jsx 규칙 두개 이상의 태그는 반드시 하나의 태그로 감싸 져야 한다 -> fragment tag 이용
      <>
          {/* jsx 주석 작성 방법 */}
          <Hello
          // 태그 안에서 주석 작성하는 방법
          />
          <div className="gray-box" style={style}> {name}</div>
          <div className="gray-box"> </div>
      </>
  );
}

export default App;
