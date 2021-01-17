import React, {useState} from 'react';
import{useCounter,useCounter1,useCounter3,useCounter4} from "../../hooks/useCounter";

export const VectorScreen = () => {
    const {state,increment,decrement, reset} = useCounter();
    const {state1,increment1,decrement1, reset1} = useCounter1();
    const {state3,increment3,decrement3, reset3} = useCounter3();
    const {state4,increment4,decrement4, reset4} = useCounter4();
    const [count, setCount] = useState(1);
    function newSite(tipo) {
        var web = './vectores.html?' + 'tipo=' + count + '&comXv1='+ state +'&comYv1=' + state1 + '&comXv2=' + state3 + '&comYv2=' + state4 + '&multia=1&multib=1';
        document.getElementById('frame').src = web
    } 
    return (
        <div className={'vector_main move-main'}>
            <div className={'main_box-container'}>
                <div>
                    <button
                        className={'btn btn-danger ml-1'}
                        onClick={
                            function () {
                                setCount(1);
                                newSite();
                            }
                        }
                    >
                        a+b=c
                    </button>
                    <button
                        className={'btn btn-danger ml-1'}
                        onClick={
                            function () {
                                setCount(2);
                                newSite();
                            }
                        }
                    >
                        a-b=c
                    </button>
                    <button
                        className={'btn btn-danger ml-1'}
                        onClick={ 
                            function () {
                                setCount(3);
                                newSite();
                            }
                        }
                    >
                        a+b+c=0
                    </button>
                </div>

            </div>
            <div className={'vector_box-container move_Vector'}>
                Base Vectors
                <div className={'mt-2'}>
                    &nbsp;ax= &nbsp;&nbsp;&nbsp; ay=
                    <div className={'mt-1'}>
                        <button
                            className={'arrow up mr-1'}
                            onClick={
                                function () {
                                    increment();
                                    newSite();
                                }
                            }
                        >
                        </button>
                        {state}
                        <button
                            className={'arrow down mr-1 ml-2'}
                            onClick={
                                function () {
                                    decrement();
                                    newSite();
                                }
                            }
                        >
                        </button>

                        <button
                            className={'arrow up mr-1 ml-1'}
                            onClick={
                                function () {
                                    increment1();
                                    newSite();
                                }
                            }
                        >
                        </button>

                        {state1}

                        <button
                            className={'arrow down mr-1 ml-2'}
                            onClick={
                                function () {
                                    decrement1();
                                    newSite();
                                }
                            }
                        >
                        </button>
                    </div>
                </div>
                <div className={'mt-2'}>
                    &nbsp; bx= &nbsp;&nbsp;&nbsp; by=
                    <div className={'mt-1'}>
                        <button
                            className={'arrow up arrow up mr-1'}
                            onClick={
                                function () {
                                    increment3();
                                    newSite();
                                }
                            }
                        >
                        </button>
                        {state3}
                        <button
                            className={'arrow down mr-1 ml-2'}
                            onClick={
                                function () {
                                    decrement3();
                                    newSite();
                                }
                            }
                        >
                        </button>

                        <button
                            className={'arrow up mr-1 ml-1'}
                            onClick={
                                function () {
                                    increment4();
                                    newSite();
                                }
                            }
                        >
                        </button>
                        {state4}
                        <button
                            className={'arrow down mr-1 ml-2'}
                            onClick={
                                function () {
                                    decrement4();
                                    newSite();
                                }
                            }
                        >
                        </button>
                    </div>
                </div>
            </div>
            <div className={'vector_box-container2'}>
                <iframe  id="frame" src={'./vectores.html?' + 'tipo=' + count + '&comXv1='+ state +'&comYv1=' + state1 + '&comXv2=' + state3 + '&comYv2=' + state4 + '&multia=1&multib=1' } title="vectores" width="810px" height="510px"></iframe>
            </div>
        </div>
    )
}