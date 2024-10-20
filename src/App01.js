// 项目跟组件

// App -> index.js  -> public/index.html(root)
const count = 1

const list = [
  {id: 1001, name: 'limei'},
  {id: 1002, name: 'haohui'},
  {id: 1003, name: 'wenwu'},
  {id: 1004, name: 'qingfeng'}
]

const flag = true

const type = 1 // 0 1 2
function getName(){
  return "neko"
}

function getType(){
  if (type === 0){
    return <div style={{color:'pink'}}>我是typy1</div>
  } else if (type === 1){
    return <div style={{color:'blue'}}>我是type2</div>
  }else{
    return <div>我是type3</div>
  }
}

const handleClick = () =>{
  console.log("button 被点击了")
}

function App() {
  return (
    <div className="App">
      This is app
      {/* 使用引号传递字符串 */}
      {"this is a string"}

      {/* js */}
      {count}

    {/* 函数调用 */}
    {getName()}

    {/* 方法调用 */}
    {new Date().getDate()}

    {/* 使用js对象 */}
    <div style={{color:'red'}}>hello world</div>
    
    {/* 列表渲染,key要绑定 */}
    <ul>
      {list.map(item=><li key={item.id}>{item.name}</li>)}
    </ul>

    {/* 逻辑表达 */}
    {flag && <span>true</span>}
    {flag && <span>true</span>}

    {flag ? <div>It is true</div> : <div>load...</div>}

    {/* 复杂样式渲染 */}
    {getType()}

    {/* 绑定点击事件 */}
    <button onClick={handleClick}>click me</button>

    </div>
  );
}

export default App;
