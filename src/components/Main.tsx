import {useState} from "react";
import {useLazyFetchPricesQuery} from "../store/binance/binance.api.ts";
import {IResponse} from "../models/models.ts";

export function Main() {
    const currency: string = 'ETHUSDT';
    const [quantity, setQuantity] = useState<string>('');
    const [pricesData, setPricesData] = useState<IResponse>();
    const [isInputCorrect, setIsInputCorrect] = useState<boolean>(true);
    const [isBuying, setIsBuying] = useState<boolean>(false);
    const [isSelling, setIsSelling] = useState<boolean>(false);
    const [fetchData, isLoading] = useLazyFetchPricesQuery();

    const validInput = (): boolean => {
        if (!(Number(quantity) > 0)) {
            setIsInputCorrect(false);
            return false;
        }
        return true
    }

    const getBuyingPricesData = async () => {
        if (!validInput())
            return;
        const result = await fetchData(currency);
        if (result.data) {
            setPricesData(result.data);
            setIsSelling(false)
            setIsBuying(true);
            setIsInputCorrect(true);
        }
    }
    const getSellingPricesData = async () => {
        if (!validInput())
            return;
        const result = await fetchData(currency);
        if (result.data) {
            setPricesData(result.data);
            setIsBuying(false);
            setIsSelling(true);
            setIsInputCorrect(true);
        }
    }

    return (
        <main
            className="bg-mainCol min-w-96 max-w-[1280px] w-screen h-screen flex flex-col justify-center items-center text-white text-center"
        >
            <div className="flex flex-col justify-center items-center mb-10 -mt-32">
                <h1 className="font-bold text-xl lg:text-2xl my-2">Welcome to the ETH to USDT calculator</h1>
                <p className="font-light text-sm lg:text-lg my-1">Here you can count how much money will you receive by
                    selling your ETH from the amount that u have.</p>
                <p className="font-light text-sm lg:text-lg my-1">Here you can count how much money will you need to buy
                    ETH for the amount u want.</p>
                <p className="font-light text-sm lg:text-lg my-1">We use latest info about prices, so you can see it in
                    real time.</p>
                <p className="font-light text-sm lg:text-lg my-1">You can enter the amount of ETH by hand, but value
                    can't be 0 or less. Also you can use scale.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <input
                    type="number"
                    className="border py-2 px-4 w-72 md:w-[570px] h-10 outline-none
                    mb-2 rounded shadow-shadowEfCol shadow-md font-light text-black"
                    placeholder="Enter your ETH quantity"
                    value={quantity}
                    onInput={() => {
                        setIsSelling(false);
                        setIsBuying(false);
                        setIsInputCorrect(true);
                    }}
                    onChange={e => {
                        if (Number(e.target.value) >= 0)
                            setQuantity(e.target.value);
                    }}
                    min={0.01}
                    max={10_000}
                    step={0.01}
                />
                <div className="flex justify-center items-center px-4 w-fit">
                    <button className="w-28 h-10 bg-elementsCol rounded
                        hover:shadow-md hover:shadow-shadowEfCol transition-all
                        font-normal text-white mx-2 cursor-pointer" onClick={getBuyingPricesData}>
                        Buy
                    </button>
                    <button className="w-28 h-10 bg-elementsCol rounded
                        hover:shadow-md hover:shadow-shadowEfCol transition-all
                        font-normal text-white mx-2 cursor-pointer" onClick={getSellingPricesData}>
                        Sell
                    </button>
                </div>
                {isLoading.isLoading && <p className="text-lg font-normal py-2 px-4">
                    The data is loading...
                </p>}
                {isLoading.isError && <p className="text-lg font-normal py-2 px-4">
                    Some error occurred, try again.
                </p>}
                {!isInputCorrect && <p className="text-lg text-red-500 font-normal py-2 px-4">
                    Incorrect input.
                </p>}
                {isBuying && <p className="text-lg font-normal py-2 px-4">
                    You will need ${Number(Number(pricesData?.bidPrice) * Number(quantity)).toFixed(2)} to buy this
                    amount of ETH
                </p>}
                {isSelling && <p className="text-lg font-normal py-2 px-4">
                    You will receive ${Number(Number(pricesData?.askPrice) * Number(quantity)).toFixed(2)} from selling
                    this amount of ETH
                </p>}
            </div>
        </main>
    );
}
