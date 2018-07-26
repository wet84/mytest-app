import React from 'react';
import { Grid, Header, Image, Table } from 'semantic-ui-react'

import Input from './Input';
import { getClients } from '../userData/ClientData';


// function Sidebar(props){
//     return(
//         <table>
//             <tbody>
//                 {
//                     props.data.map(row =>(
//                         <tr>
//                             <td>{row.general.firstName}</td>
//                             <td>{row.job.company}</td>
//                             <td>{row.contact.contact}</td>
//                             <td>{row.address.street}</td>
//                         </tr>
//                     ))
//                 }
//             </tbody>
//         </table>
//     );
// }

    function ListUser(props){
    // {console.log(props.client[0].general.firstName)}
      //console.log('client', this.props.client)}
      console.log(props)
     // const { client } = props
        return (
            <Grid.Column width={6} className="user-detail-style">
                <Input />
                <Table basic='very' celled>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='#' rounded size='mini' />
                                    <Header.Content>
                                       {props.firstName}
                                    <Header.Subheader>info</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Grid.Column>
        );
    }

    // const ListUser = () => (
    //         <Grid.Column width={6} className="user-detail-style">
    //             <Input />
    //             <Table basic='very' celled>
    //                 <Table.Body>
    //                     <Table.Row>
    //                         <Table.Cell>
    //                             <Header as='h4' image>
    //                                 <Image src="#" rounded size='mini' />
    //                                 <Header.Content>
    //                                     name
    //                                 <Header.Subheader>info</Header.Subheader>
    //                                 </Header.Content>
    //                             </Header>
    //                         </Table.Cell>
    //                     </Table.Row>
    //                 </Table.Body>
    //             </Table>
    //         </Grid.Column>
    //   )

export default ListUser;