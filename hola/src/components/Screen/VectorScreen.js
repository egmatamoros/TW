import React from 'react'
import{useCounter,useCounter1,useCounter3,useCounter4} from "../../hooks/useCounter";

export const VectorScreen = () => {
    const {state,increment,decrement, reset} = useCounter();
    const {state1,increment1,decrement1, reset1} = useCounter1();
    const {state3,increment3,decrement3, reset3} = useCounter3();
    const {state4,increment4,decrement4, reset4} = useCounter4();
    return (
        <div className={'vector_main move-main'}>
            <div className={'main_box-container'}>
                <div>
                    <button
                        className={'btn btn-primary btn-block1 ml-1'}
                    >
                        a+b=c
                    </button>
                    <button
                        className={'btn btn-primary btn-block1 ml-1'}
                    >
                        a-b=c
                    </button>
                    <button
                        className={'btn btn-primary btn-block1 ml-1'}
                    >
                        a+b+c=0
                    </button>
                </div>

            </div>
            <div className={'vector_box-container move_Vector'}>
                Base Vectors
                <div className={'mt-1'}>
                    <button
                        className={'arrow up move-arrow-up1'}
                        onClick={()=>increment()}
                    >

                    </button>
                    <button
                        className={'arrow up move-arrow-up2'}
                        onClick={()=>increment1()}
                    >

                    </button>
                </div>
                <div className={'mr-2 mt-3'}>
                    <div>ax={state}</div>
                    <div>ay={state1}</div>
                </div>
                <div>
                    <button
                        className={'arrow down move-arrow-down1'}
                        onClick={() =>decrement()}
                    >

                    </button>
                    <button
                        className={'arrow down move-arrow-down2'}
                        onClick={() =>decrement1()}
                    >

                    </button>
                </div>
                <div className={'mt-1'}>
                    <button
                        className={'arrow up move-arrow-up3'}
                        onClick={()=>increment3()}
                    >

                    </button>
                    <button
                        className={'arrow up move-arrow-up4'}
                        onClick={()=>increment4()}
                    >

                    </button>
                </div>
                <div className={'mt-2'}>
                    <div className={'mt-2'}>bx={state3}</div>

                    <div className={'mt-2'}>by={state4}</div>
                </div>

                <div>
                    <button
                        className={'arrow down move-arrow-down3'}
                        onClick={() =>decrement3()}
                    >

                    </button>
                    <button
                        className={'arrow down move-arrow-down4'}
                        onClick={() =>decrement4()}
                    >

                    </button>
                </div>

            </div>
        </div>
    )
}