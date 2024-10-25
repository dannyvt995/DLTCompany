import React from 'react'
import s from './style.module.css'
export default function PageHeader({data}:
    {data:any}
) {
    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{data.name}</h2>
                    </div>
                    <div className="col-12">
                        <p className={s.sub}>{data.des}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
