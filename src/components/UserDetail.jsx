import React from 'react';
import { Grid, Card, Icon, Image } from 'semantic-ui-react'




function UserDetail({client, general, avatar }){
    return (
      
        <Grid.Column width={10} className="user-detail-style">
                <Card>
                    <Image src={avatar}/>
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                </Card>
        </Grid.Column>
    );
}

export default UserDetail;