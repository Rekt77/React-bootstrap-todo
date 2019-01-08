import React from 'react';
import { Button, FormGroup, FormControl, Form, Grid, Row, HelpBlock } from 'react-bootstrap'


const ToDoInput = ({value, onChange, onInsert}) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return(
        <Grid>
        <Row>
        <Form>
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
            <HelpBlock>Give me your schedules.</HelpBlock>
        </FormGroup>
        <Button bsStyle="primary" className="pull-right" onClick={onInsert}>add schedules</Button>
        </Form>
        </Row>
        </Grid>

    );
}

export default ToDoInput;