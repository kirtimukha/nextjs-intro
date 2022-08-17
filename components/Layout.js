import NavBar from "./NavBar";

export default function Layout ( {children} ){
    // children : react가 제공하는 prop
    // 하나의 컴포넌트를 또 다른 컴포넌트 안에 넣을 때 쓸 수 있다.
    // 여기에서는 _app.js의 <Component/>가 children임
    return(
        <>
            <NavBar />
            <div>{children}</div>
        </>
    )

}