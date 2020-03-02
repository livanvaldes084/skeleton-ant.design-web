import React, {useState} from "react";
import { Row, Col } from 'antd';
import mockData from './data';
import Widget from './Widget';

const ListWidget = props => {
    const style = { padding: '8px 0' };
    const [widgets] = useState(mockData);

    return(
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
             {widgets.map((widget, i) => (
                <Col className="gutter-row" span={6} key = { widget.id }>
                  <div style={style}> 
                    <Widget name = { widget.name } imageUrl = {widget.imageUrl}/>
                  </div>
                </Col>
            ))}
           
        </Row>
    );
};

export default ListWidget;