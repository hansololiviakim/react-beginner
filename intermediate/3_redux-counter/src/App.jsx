import React from 'react';
import { useSelector } from 'react-redux';

// ! Redux (=== 전역 상태관리 라이브러리)
// * JavsScript 애플리케이션에서 상태(State)를 관리하기 위한 패키지이다.
// 리덕스를 사용하면 애플리케이션의 모든 상태를 하나의 중앙 집중화된 저장소(store)에 저장하고,
// 애플리케이션의 모든 컴포넌트에서 이 상태를 쉽게 가져와 사용할 수 있다.
// * 액션(action)이라는 객체를 사용하여 상태를 업데이트한다.
// 액션을 일종의 메세지로서, 애플리케이션에서 어떤 일이 일어났는지 설명한다.
// * 액션은 리듀서(reducer)라는 함수에 전달된다.
// 리듀서는 현재 상태와 액션을 받아서 새로운 상태를 반환한다.
// 이를 통해 애플리케이션의 상태를 업데이트할 수 있다.
// * 리덕스의 장점
// 상태를 중앙 집중화하여 관리하기 때문에, 여러 컴포넌트에서 동일한 상태를 사용해야 하는 경우 매우 유용하다.
// 또한 상태의 변경을 추적하고 디버깅하기 쉽다.

// ! Global state와 Local state
// * Local state (지역 상태)
// 컴포넌트에서 useState를 이용해서 생성한 state
// * Global state (전역 상태)
// 중앙 state 관리소 -> 이곳에서 state를 생성하면 컴포넌트가 어디에 위치하고있든 상관 없이 state를 불러와서 사용 가능
// 이러한 값들을 관리하는 것을 '전역 상태 관리'라고 한다.

// ! redux 폴더 구조
// [redux] 리덕스와 관련된 코드를 모두 모아 놓을 폴더
// [config] 리덕스 설정과 관련된 파일들을 놓을 폴더
// [configStore] 중앙 state 관리소인 'Store'를 만드는 설정 코드들이 있는 파일
// [modules] 우리가 만들 state들의 그룹
// ex. 투두리스트일 경우 투두리스트에 필요한 state를 모두 모을 todos.js를 생성하고 이 파일이 곧 하나의 모듈이 됨

function App() {
  // 여기서 store에 접근하여 counter의 값을 읽어오려 한다.
  // ! useSelector (redux hook) 사용
  // state : 중앙저장소 안에 있는 모든 state
  const data = useSelector((state) => {
    console.log(state.counter);
  });

  return (
    <div>App</div>
  )
}

export default App