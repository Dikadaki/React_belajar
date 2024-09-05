import React, { useState } from 'react';
import { Button, Collapse, Card } from 'react-bootstrap';
import './CollapseExample.css';

function CollapseExample() {
    const [open, setOpen] = useState(false);

    return (
    <div>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        >
        Toggle Collapse
        </Button>
        <Collapse in={open}>
        <div id="example-collapse-text" className="custom-collapse-content">
            <Card className='custom-collapse-card'>
            <Card.Body>
                hahaahThis is some content that will be shown or hidden when you click the button.
            </Card.Body>
            </Card>
        </div>
        </Collapse>
    </div>
    );
}

export default CollapseExample;
