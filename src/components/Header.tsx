export function Header() {
    return (
        <>
            <header
                className="bg-headerCol fixed rounded-b-2xl min-w-96 max-w-[1280px] w-screen h-28 xl:h-36 grid place-items-center"
            >
                <div className="relative flex justify-between items-center w-fit h-fit">
                    <img src="/src/assets/img/logo.png" alt="logo" className="w-12 h-12"/>
                    <p className=" ml-3 text-white text-xl md:text-2xl xl:text-3xl font-semibold">ETH to USDT
                        calculator</p>
                </div>
            </header>
        </>
    );
}
