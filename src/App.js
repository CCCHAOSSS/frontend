// 项目跟组件

// App -> index.js  -> public/index.html(root)
const count = 1

const list = [
  {id: 1001, name: 'limei'},
  {id: 1002, name: 'haohui'},
  {id: 1003, name: 'wenwu'},
  {id: 1004, name: 'qingfeng'}
]

function getName(){
  return "neko"
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
    </div>
    
  );
}

export default App;
