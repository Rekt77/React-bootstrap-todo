import React from 'react';
import { Container, Input, FormGroup, Form, Row, Label} from 'reactstrap'
import { Button } from 'reactstrap';


const ToDoInput = ({value, onChange, onInsert}) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return(
        <Container>
        <Row>
        <Form>
        <FormGroup>
            <Label>What do you going to do?</Label>
            <Input
                type="text"
                value={value}
                placeholder="할일을 입력하세요"
                onChange={onChange}
                onKeyPress={handleKeyPress}
            />
        </FormGroup>
        <Button className="pull-right" color="primary" onClick={onInsert}>add schedules</Button>
        </Form>
        </Row>
        </Container>

    );
}

export default ToDoInput;