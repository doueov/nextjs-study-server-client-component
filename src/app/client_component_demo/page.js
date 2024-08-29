// "use client" 디렉티브를 반드시 써줘야 함
"use client"

import { useState } from "react"

export default function ClientComponentDemoPage() {
    const [data, setData] = useState("hello")
    console.log("from Client Component Demo Page")
    return <div>
        <h1>Client Component Demo Page</h1>
        <input type="text" value={data} onChange={e => setData(e.target.value)} />
        <button onClick={() => {
            alert(data);
        }}>이벤트 테스트</button>
    </div>
}