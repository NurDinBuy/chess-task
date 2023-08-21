import React, {useState} from 'react'
import {Button} from 'antd';
import classes from './myAccordion.module.css'
import { useSelector } from 'react-redux';
import MyTable from './MyTable';
import MyChess from './MyChess';

const MyAccordion = (props) => {
    const [table, setTable] = useState('table')
    const [type, setType] = useState(true)    
    const divisionItem = useSelector(state => state.root.division)
    const chessItem = useSelector(state => state.root.chess)
    const newDivisionItem = JSON.parse(JSON.stringify(divisionItem))
    for (let i = 0; i < newDivisionItem.length; i++) newDivisionItem[i].newKey = i + 1

    return (
        <div>
            <div>
                <Button 
                    type={type && 'primary'} 
                    className={classes.btn}
                    onClick={() => {
                        setTable('table')
                        setType(true)
                    }}
                >
                    Таблица
                </Button>
                <Button 
                    type={!type && 'primary'} 
                    className={classes.btn}
                    onClick={() => {
                        setTable('chess')
                        setType(false)
                    }}
                >
                    Шахматка
                </Button>
            </div>
            {
                table === 'table'
                ?
                <MyTable newDivisionItem={newDivisionItem}/>    
                :
                <MyChess chessItem={chessItem} />
            }

        </div>
    )
}

export default MyAccordion