import React from 'react';
import { Container, Input, Row, Label} from 'reactstrap'
import { Button } from 'reactstrap';


const ToDoInput = ({value, onChange, onInsert}) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return(
        <Container>
            <Label>어떤 일정이 있으신가요?</Label>
            <Row>
            <Input
                type="text"
                className="form-control"
                value={value}
                placeholder="할일을 입력하세요"
                onChange={onChange}
                onKeyPress={handleKeyPress}
            />
            <br/>
            <Button className = "pull-right" color="primary" onClick={onInsert}>일정 추가</Button>
            </Row>
        </Container>
    );
}

export default ToDoInput;