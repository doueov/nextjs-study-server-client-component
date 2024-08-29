"use client"

export default function ClientComponentRenderServerComponent(props) {
    return <div>
        {props.serverComponentProp}
        {props.children}
    </div>
}