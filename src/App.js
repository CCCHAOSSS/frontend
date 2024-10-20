// 项目跟组件

// App -> index.js  -> public/index.html(root)

import { useRef } from "react";

// 1. useRef生成ref对象，绑定到dom标签上

// 2。 dom可用时，ref.current 获取dom
//渲染完毕之后dom生成之后才可用

// function App() {
//     const inputRef = useRef(null)
//     const showDom = () => {
//         console.dir(inputRef.current)
//     }
//   return (
//     <div className="App">
//         <input type="text" ref={inputRef} />
//         <button onClick={showDom}>获取dom</button>
//     </div>
//   )
// }

// 父传子

// 1，父组件传递数据 子组件标签身上绑定属性
// 2，子组件接收数据  props的参数

function Son(props){    // props是传递过来的对象
    console.log(props)
    // props.name = "haha"  // 不允许修改传递过来的，props是只读的
    return <div>this is son, {props.name}</div>
}
function App(){
    const name = "this is farther App name"
    return (
        <div>
            <Son name={name}></Son>
        </div>
    )
    
}
export default App;
