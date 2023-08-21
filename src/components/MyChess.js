import { Table } from 'antd'
import React from 'react'
import classes from './myAccordion.module.css'

const MyChess = (props) => {
    const {chessItem} = props
    const columns = [
        {
            title: 'Участники',
            dataIndex: 'team',
            key: 'team',
            fixed: 'left',
            width: 200,
            align: 'center',
        }
    ]
    const data = []


    chessItem.forEach((item, index) => {
        const items = item[1].slice(2)
        const obj = {team: item[0]}
        for (let key in items) obj[key] = items[key]
        data.push(obj)
        columns.push({
            title: item[0],
            dataIndex: `${index}`,
            key: 'index',
            width: 200,
            align: 'center'
        })
    })

    return (
        <Table
            dataSource={data}
            pagination={false}
            columns={columns}
            bordered
            scroll={{
                x: 1500,
                y: 300,
            }}
        />
    )
}

export default MyChess