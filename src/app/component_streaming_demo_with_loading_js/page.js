import UserListComponent from "@/components/UserListComponent"

export default async function ComponentStreamingDemoPage() {
    return <div>
        <h1>Component Streaming Demo Page</h1>
        {/* UserListComponent 내부적으로 비동기 작업을 진행하므로 자동으로 해당 컴포넌트가 정의된 파일과 가까운 loading.js 파일을 비동기 작업 끝날때까지 대체하여 렌더링함 */}
        <UserListComponent />
    </div>
}