import React from 'react';
import {
    Grid, InputLabel,
} from 'material-ui';

import {
    ProfileCard, RegularCard, Table, Button, CustomInput, ItemGrid
} from 'components';

import avatar from 'assets/img/faces/kuda.ua_.gerb_.ukraine.12.png';

class ContragentDossie extends React.Component{
    render(){
        return (
            <div>
                <Grid container >
                    <ItemGrid xs={12} sm={12} md={4}>
                        <ProfileCard
                            avatar={avatar}
                            subtitle="Колхоз Херовеньки"
                            title="Колхоз"
                            description="Сеем, пашем, пляшем."
                            footer={
                                <Button color="primary" round>Отослать email</Button>
                            }
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={8}>
                        <RegularCard
                            cardTitle="Херовеньки"
                            cardSubtitle="Колхоз"
                            content={
                                <div>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>Заметки</InputLabel>
                                            <CustomInput
                                                labelText="Сеем, пашем, пляшем."
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
                                    <Grid container >
                                        <ItemGrid xs={12} sm={12} md={5}>
                                            <CustomInput
                                                labelText="Юрлицо"
                                                id="company-disabled"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    disabled: true,
                                                    defaultValue:"ЗАО 'Колхоз Херовеньки'"
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={3}>
                                            <CustomInput
                                                labelText="Директор"
                                                id="username"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    disabled: false,
                                                    defaultValue:"Ё.Б. Хуев"
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
                                </div>
                            }
                            footer={
                                <Button color="primary">Сохранить изменения</Button>
                            }
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={12}>
                        <RegularCard
                            plainCard
                            cardTitle="Список Контрагентов"
                            //cardSubtitle="Here is a subtitle for this table"
                            content={
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={['ID','Name','Country','City','Salary']}
                                    tableData={[
                                        [ "1" , "ЧП Херов Ю.Б." , "$36,738" , "Niger" , "Oud-Turnhout" ] ,
                                        [ "2" , "ФЛП Хер Няо" , "$23,789" , "Curaçao" , "Sinaai-Waas" ] ,
                                        [ "3" , "Колхоз Херовеньки" , "$56,142" , "Netherlands" , "Baileux" ] ,
                                        [ "4" , "ООО ХуиХер" , "$38,735" , "Korea, South" , "Overland Park" ] ,
                                        [ "5" , "НП КупилПродам" , "$63,542" , "Malawi" , "Feldkirchen in Kärnten" ] ,
                                        [ "6" , "Пиццерия Мафия" , "$78,615" , "Chile" , "Gloucester" ]
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

export default ContragentDossie;
