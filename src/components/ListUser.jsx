import React from 'react';
import { Grid, Header, Image, Table } from 'semantic-ui-react'

import Input from './Input';


function Sidebar(){

    return (

        <Grid.Column width={6} className="user-detail-style">
            <Input />
            <Table basic='very' celled collapsing>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='#' rounded size='mini' />
                                <Header.Content>
                                     Name 
                                <Header.Subheader>additional information</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Grid.Column>

    );
}


export default Sidebar;