import * as React from 'react';
import { SubHeader } from 'components/SubHeader';
import { MailContainer } from './components/MailContainer';
import { MenuItem, Dropdown } from 'react-bootstrap';
import { EmptyList } from './components/EmptyList';
import { MailList } from './components/MailList';


const style = require('./style.css');

interface IState {
  messages: string[];
}

export class Mailbox extends React.Component<any, IState> {

  constructor(props) {
    super(props);
    this.state = { messages: ['1'] };
  }

  public render() {
    return (
      
      <div className={style.Mailbox}>
        <SubHeader activeSrc="/mailbox" />
        <div className="container">
          <div className="form-group">
            <Dropdown id="dropdown-custom-1">
              <Dropdown.Toggle>
                <span className={style.selectedText}>全部(0)</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="super-colors">
                <MenuItem eventKey="1">全部</MenuItem>
                <MenuItem eventKey="2">已读</MenuItem>
                <MenuItem eventKey="3" active>未读</MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <MailContainer>
            {
              this.state.messages.length? <MailList/> : <EmptyList /> 
            }
          </MailContainer>
        </div>
      </div>
    );
  }
}
