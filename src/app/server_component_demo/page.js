import MyServerComponent from "@/app/components/MyServerComponent"

export default async function ServerComponentDemoPage() {
    console.log("from Server Component Demo Page")
    return <div>
        <h1>Server Component Demo Page</h1>
        {/* 서버 컴포넌트 렌더링 */}
        <MyServerComponent />
    </div>
}