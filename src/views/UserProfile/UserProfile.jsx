import React from 'react';
import {
    Grid, InputLabel,
} from 'material-ui';

import {
    ProfileCard, RegularCard, Button, CustomInput, ItemGrid, Table,
} from 'components';

import avatar from 'assets/img/faces/marc.jpg';

class UserProfile extends React.Component{
    render(){
        return (
            <div>
                <Grid container>
                    <ItemGrid xs={12} sm={12} md={8}>
                        <RegularCard
                            cardTitle="Иоган Пгодаван-Перший"
                            cardSubtitle="ЛИЧНОЕ ДЕЛО"
                            content={
                                <div>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={5}>
                                            <CustomInput
                                                labelText="Company (disabled)"
                                                id="company-disabled"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    disabled: true
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={3}>
                                            <CustomInput
                                                labelText="Username"
                                                id="username"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={4}>
                                            <CustomInput
                                                labelText="Email address"
                                                id="email-address"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                    </Grid>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="First Name"
                                                id="first-name"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Last Name"
                                                id="last-name"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                    </Grid>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={4}>
                                            <CustomInput
                                                labelText="City"
                                                id="city"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={4}>
                                            <CustomInput
                                                labelText="Country"
                                                id="country"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={4}>
                                            <CustomInput
                                                labelText="Postal Code"
                                                id="postal-code"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                    </Grid>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>About me</InputLabel>
                                            <CustomInput
                                                labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                                                id="about-me"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    multiline: true,
                                                    rows: 5
                                                }}
                                            />
                                        </ItemGrid>
                                    </Grid>
                                </div>
                            }
                            footer={
                                <Button color="primary">Update Profile</Button>
                            }
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <ProfileCard
                            avatar={avatar}
                            subtitle="CEO / CO-FOUNDER"
                            title="Иоган Пгодаван-Перший"
                            description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                            footer={
                                <Button color="primary" round>Follow</Button>
                            }
                        />
                    </ItemGrid>

                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        plainCard
                        cardTitle="Список остальных лузеров"
                        //cardSubtitle="Here is a subtitle for this table"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['ID','Name','Country','City','Salary']}
                                tableData={[
                                    [ "1" , "Dakota Rice" , "$36,738" , "Niger" , "Oud-Turnhout" ] ,
                                    [ "2" , "Minerva Hooper" , "$23,789" , "Curaçao" , "Sinaai-Waas" ] ,
                                    [ "3" , "Sage Rodriguez" , "$56,142" , "Netherlands" , "Baileux" ] ,
                                    [ "4" , "Philip Chaney" , "$38,735" , "Korea, South" , "Overland Park" ] ,
                                    [ "5" , "Doris Greene" , "$63,542" , "Malawi" , "Feldkirchen in Kärnten" ] ,
                                    [ "6" , "Mason Porter" , "$78,615" , "Chile" , "Gloucester" ]
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                </Grid>
            </div>
        );
    }
}

export default UserProfile;
