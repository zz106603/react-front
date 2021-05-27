<h2>Context</h2>

- <h5>ColorContext.js</h5>

  - Context 설정 파일

  - React.**createContext**({...})

    - 컴포넌트가 아님, 정적으로 사용

  - export function **ColorContextProvider**(props){...}

    - 이전 상태의 변경이 일어났을 시 실행되는 함수

    - 컴포넌트

    - value값은 초기값 지정과 과 같은 형태(createContext)

    - ```javascript
       const [color, setColor] = useState("yellow");
          const value = {
              color: color,
              setColor: setColor
          }
          return(
              <ColorContext.Provider value={value}>
                  {props.children}
              </ColorContext.Provider>  
        		// value값으로 Provider의 value의 값을 전달	
        	);
      ```

      

- <h4>Class 형식에서 사용</h4>

  - **static contextType** 으로 선언
    - static contextType = ColorContext;
  - 정적 속성
  - **this.context**.**setColor**("red") 형식으로 사용

  

- <h4>Function 형식에서 사용</h4>

  - **useContext()** 사용

    - const colorContext = **useContext**(ColorContext);

  - colorContext.**setColor**("red") 형식으로 사용

    

<h2>Redux</h2>

- const **initialState** = {...}

  - 상태 초기값 선언

- const SET_UID = "auth/setUid";

  - 액션 타입 선언

- ```javascript
  export const createSetUidAction = (uid) =>{
      return{
      	type:SET_UID, uid
  	};
  };
  
  // 액션 생성 함수 선언
  // createSetUidActioin()이 호출되면 type과 데이터 값을 설정해서 authReducer에 action으로 전달될 수 있음
  ```

- ```javascript
  const authReducer = (state=initialState, action) => {
      if(action.type === SET_UID){
          return {...state, uid:action.uid}
      }else if(action.type === SET_AUTH_TOKEN){
          return {...state, authToken: action.authToken};
      }else{
          return state;
      }
  }
  
  // 리듀스 선언
  // 값을 가져올 경우 authReducer.uid를 이용하여 가져올 수 있음
  // setUid인 경우는 createSetUidAction()을 이용해 action에 타입과 데이터를 전달
  ```



- <h4>Class 형식에서 사용</h4>

  ```javascript
  // this.props.setUid(this.state.uid);
  // 변경된 상태값(uid)을 props에 저장?
  
  const mapStateToProps = (state) => {
      return {
          uid:state.authReducer.uid
          //authReducer에서 uid값을 가져옴
      }
  };
  
  const MapDispatchToProps = (dispatch) => {
      return{
          setUid: (uid) => dispatch(createSetUidAction(uid))
          //createSetUidAction을 호출해서 타입과 데이터값을 설정
          //store에 있는 dispatch를 이용(내장)
      }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
  ```
  
  - **store**에 내장된 **state**와 **dispatch**를 이용해 uid, setUid를 return



- <h4>function 형식에서 사용</h4>

```javascript
//userSelector((state) = {...})를 이용해서 값을 가져올 수 있음
const globalUid = useSelector((state) => {
    return state.authReducer.uid
    // authReducer()를 이용해 uid값 얻기
});

const dispatch = useDispatch();

const login = (event) => {
 dispatch(createSetUidAction(uid));
 //입력된 값을 createSetUidAction()을 이용해 변화한 상태데이터 값을 설정
}
```

