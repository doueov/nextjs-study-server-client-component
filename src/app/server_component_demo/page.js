import MyServerComponent from "@/components/MyServerComponent"
import UserListComponent from "@/components/UserListComponent"

export default async function ServerComponentDemoPage() {
    console.log("from Server Component Demo Page")
    return <div>
        <h1>Server Component Demo Page</h1>
        <MyServerComponent />
        <UserListComponent />
    </div>
}