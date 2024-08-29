import { Suspense } from "react";
import UserListComponent from "@/components/UserListComponent";

async function LoadingScreen() {
    return <div>
        <img src="loading.gif" style={{ width: "30px", height: "30px" }} />
    </div>
}

export default async function ComponentStreamingDemoPage() {
    return <div>
        <h1>Component Streaming Demo Page</h1>
        <Suspense fallback={<div>Loading...</div>}>
            <UserListComponent />
        </Suspense>
        <Suspense fallback={<LoadingScreen />}>
            <UserListComponent />
        </Suspense>
    </div>
}