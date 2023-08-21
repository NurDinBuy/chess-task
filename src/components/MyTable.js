import React from 'react'
import {Col, Row ,Table} from 'antd'

const MyTable = (props) => {
    const {newDivisionItem} = props


    const columns = [
        {
            title: '#',
            dataIndex: 'newKey',
            key: 'newKey',
            render: (text) => <div style={{ 
                backgroundColor: text > 16 ? 'red' : text < 5 ? 'green' : 'white', 
                color: text > 16 ? 'white' : text < 5 ? 'white' : 'black',
                textAlign: 'center'
            }}>{text}</div>
        },
        {
            title: 'Участники',
            dataIndex: 'team_name',
            key: 'team_name'
        },
        {
            title: 'И',
            dataIndex: 'games',
            key: 'games'
        },
        {
            title: 'В',
            dataIndex: 'wins',
            key: 'wins'
        },
        {
            title: 'Н',
            dataIndex: 'draw',
            key: 'draw'
        },
        {
            title: 'П',
            dataIndex: 'lose',
            key: 'lose'
        },
        {
            title: '+/-',
            dataIndex: 'psm',
            key: 'psm'
        },
        {
            title: 'Очки',
            dataIndex: 'points',
            key: 'points'
        },
    ]

    return (
        <Row>
            <Col xs={24}>
                <Table 
                    dataSource={newDivisionItem}
                    columns={columns}  
                    pagination={false}
                />
            </Col>
        </Row>
    )
}

export default MyTable