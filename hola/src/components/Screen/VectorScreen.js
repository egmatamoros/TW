import React from 'react'

export const VectorScreen = () => {
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
                    <button className={'arrow-up move-arrow-up1'}>

                    </button>
                    <button className={'arrow-up'}>

                    </button>
                </div>
                <div className={'mr-2'}>
                    ax=
                    <input type="text" className={'text mr-1'}/>
                    ay=
                    <input type="text" className={'text mr-1'}/>
                </div>
                <div className={'mt-2'}>
                    bx=
                    <input type="text" className={'text mr-1'}/>
                    by=
                    <input type="text" className={'text mr-1'}/>
                </div>
            </div>
        </div>
    )
}