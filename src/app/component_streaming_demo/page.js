import { Suspense } from "react";
import UserListComponent from "@/components/UserListComponent";

async function LoadingScreen() {
    return <div>
        {/*
            https://drive.google.com/file/d/15-JwR9_g9-gX3d0IFjLfQnwUMsdJj3lo/view?usp=sharing
            파일 받아서 public 폴더에 넣기
        */}
        <img src="loading.gif" style={{ width: "30px", height: "30px" }} />
    </div>
}

export default async function ComponentStreamingDemoPage() {
    return <div>
        <h1>Component Streaming Demo Page</h1>
        {/* Suspense의 fallback 속성으로 제공한 컴포넌트(혹은 요소)가 비동기 작업이 완료되고 렌더링이 될 때까지 그려짐 */}
        <Suspense fallback={<div>Loading...</div>}>
            <UserListComponent />
        </Suspense>
        <Suspense fallback={<LoadingScreen />}>
            <UserListComponent />
        </Suspense>
        {/* 서버 컴포넌트가 아닌 클라이언트 컴포넌트는 fallback 컴포넌트로 사용 불가능한 듯? */}
    </div>
}