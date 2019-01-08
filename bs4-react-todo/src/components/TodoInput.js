import React from 'react';
import { Button, FormGroup, FormControl, Form, Row, Col } from 'react-bootstrap'

const ToDoInput = ({value, onChange, onInsert}) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return(
        <Row>
        <Col xs={12} md={8}>
        <Form inline>
        <FormGroup
            controlId="formBasicText"
            >
            <FormControl
                type="text"
                value={value}
                placeholder="할일을 입력하세요"
                onChange={onChange}
                onKeyPress={handleKeyPress}
            />
        </FormGroup>
        <Button onClick={onInsert}>추가</Button>
        </Form>
        </Col>
        </Row>
    );
}

export default ToDoInput;