import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getDivisions, getChess, getDivision} from './redux/rootSlice'
import MyAccordion from './components/MyAccordion'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDivisions())
    dispatch(getChess())
  }, [dispatch])

  const data = useSelector(state => state.root.divisions)
  
  return (
    <div style={{width: '800px', margin: '0 auto'}}>
      <Collapse accordion>
        {
          data.map((division, index) => 
          <Panel 
            header={division.title} 
            key={division.id}
            onClick={() => {
              dispatch(getDivision(division.id))
              dispatch(getChess(division.id))
            }}
          >
            <MyAccordion
              key={index}
            />
          </Panel>
          )
        }
      </Collapse>
    </div>
  );
}

export default App;
