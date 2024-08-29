// 아예 import 자체가 불가능함을 유의
// import { useState } from "react"

export default async function ServerComponentDemoPage() {
    // 훅 사용 불가
    // const [data, setData] = useState(null)
    console.log("from Server Component Demo Page")
    return <div>Server Component Demo Page</div>
}