import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import _sortBy from 'lodash/sortBy'


import { 
    styled
} from '@config/stitches';

const Container = styled('div', {
    backgroundColor: '$black100',
    padding: '$16'
})

const Space = styled('div', {
    height: '$6'
})

import {
    Button, 
    Checkbox,
    Input,
    Radio,
    Select,
    Textarea
} from '@components/Form'

import {
    Image, 
} from '@components/Media'

import {
    Grid,
    List,
    ListItem,
    Modal, 
    RankTable,
    SortTable,
    SortTableHeader,
    Table,
    TableRow,
    TableHeader,
    TabContainer,
    TabNavigation,
    TabPanels,
    TabPanel,
    Tab,
} from '@components/Layout'

import Text from '@components/Text'

const App = () => {
    const [showModal, setShowModal] = useState(false)
    const [radio, setRadio] = useState(1)
    const [checked, setChecked] = useState(false)
    const [input, setInput] = useState('')

    const [activeColumn, setActiveColumn] = useState(null)
    const [direction, setDirection] = useState('asc')
    const [columns, setColumns] = useState(
        [
            {
                title: 'First row',
                date: 'October 31, 2021',
                author: 'David Woolf'
            }, {
                title: 'Second row',
                date: 'November 1, 2021',
                author: 'Ashlyn Duhatois'
            }, {
                title: 'Third row',
                date: 'November 2, 2021',
                author: 'Nick Frandsen'
            }, {
                title: 'Fourth row',
                date: 'November 3, 2021',
                author: 'David Woolf'
            }
        ]
    )

    const [rankColumns, setRankColumns] = useState(
        [
            {
                id: 1,
                title: 'First row',
                date: 'October 31, 2021',
                author: 'David Woolf'
            }, {
                id: 2,
                title: 'Second row',
                date: 'November 1, 2021',
                author: 'Ashlyn Duhatois'
            }, {
                id: 3,
                title: 'Third row',
                date: 'November 2, 2021',
                author: 'Nick Frandsen'
            }, {
                id: 4,
                title: 'Fourth row',
                date: 'November 3, 2021',
                author: 'David Woolf'
            }
        ]
    )

    return(
        <Container>
            <Grid.Container
            columns={2}
            gap="$24">
                <Grid.Item>
                    <Text
                    size="heading"
                    css={{
                        paddingBottom: '$4'
                    }}>
                        Tabs
                    </Text>

                    <TabContainer>
                        <TabNavigation>
                            <Tab>
                                Table
                            </Tab>

                            <Tab>
                                Sortable Table
                            </Tab>

                            <Tab>
                                Rank Table
                            </Tab>
                        </TabNavigation>


                        <TabPanels>
                            <TabPanel>
                                <Text
                                size="heading">
                                    Table
                                </Text>

                                <Table
                                css={{
                                    marginY: '$4'
                                }}
                                track={["3fr", '1fr', '1fr', '1fr']}
                                columns={[
                                    {
                                        'id': 'title',
                                        'name': 'Title',
                                    }, {
                                        'id': 'image',
                                        'name': <svg width="16" height="16" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M14.162 10.0744C13.2962 12.6471 10.8645 14.5 8 14.5C5.40133 14.5 3.15883 12.975 2.11861 10.7711L3.50666 8.95406C3.77599 8.60148 4.29084 8.55849 4.61491 8.86152L5.5896 9.77293C6.61597 10.7326 8.26116 10.5272 9.02002 9.34458L10.4419 7.12869C10.7157 6.70189 11.3254 6.66424 11.6497 7.05411L14.162 10.0744ZM14.4987 8.13354L12.8029 6.09488C11.8301 4.92528 10.001 5.03822 9.17943 6.31861L7.75757 8.53451C7.50462 8.92872 6.95622 8.99719 6.6141 8.67729L5.6394 7.76588C4.66719 6.85681 3.12263 6.98578 2.31465 8.0435L1.57772 9.00821C1.52655 8.67964 1.5 8.34292 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 8.04462 14.4995 8.08914 14.4987 8.13354ZM0.410413 10.5363C0.144196 9.73934 0 8.88651 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C4.47487 16 1.48226 13.72 0.41641 10.5542L0.403997 10.5447L0.410413 10.5363Z" fill="#23282D"/></svg>,
                                    }, {
                                        'id': 'date',
                                        'name': 'Date',
                                    }, {
                                        'id': 'author',
                                        'name': 'Author',
                                    }
                                ]}
                                source={[
                                    {
                                        title: 'First row',
                                        date: 'October 31, 2021',
                                        author: 'David Woolf'
                                    }, {
                                        title: 'Second row',
                                        date: 'November 1, 2021',
                                        author: 'Ashlyn Duhatois'
                                    }, {
                                        title: 'Third row',
                                        date: 'November 2, 2021',
                                        author: 'Nick Frandsen'
                                    }, {
                                        title: 'Fourth row',
                                        date: 'November 3, 2021',
                                        author: 'David Woolf'
                                    }
                                ]}>
                                    {(rows) => (
                                            <>
                                                <TableHeader />

                                                {rows.map(row => <TableRow row={row} />)}
                                            </>
                                    )}
                                </Table>
                            </TabPanel>

                            <TabPanel>
                                <Text
                                size="heading"
                                >
                                    Sortable Table
                                </Text>

                                <SortTable
                                css={{
                                    marginY: '$4'
                                }}
                                direction={direction}
                                sortBy={activeColumn}
                                onSort={column => {
                                    setDirection(column == activeColumn ? direction == 'asc' ? 'desc' : 'asc' : 'asc')

                                    setActiveColumn(column)
                                    
                                    setColumns(
                                        _sortBy(
                                            columns, 
                                            [function(c) {
                                                return c[column]
                                            }]
                                        )
                                    )
                                }}
                                track={["3fr", '1fr', '1fr']}
                                columns={[
                                    {
                                        'id': 'title',
                                        'name': 'Title',
                                    },{
                                        'id': 'date',
                                        'name': 'Date',
                                    }, {
                                        'id': 'author',
                                        'name': 'Author',
                                    }
                                ]}
                                source={columns}>
                                    {(rows) => (
                                            <>
                                                <SortTableHeader />

                                                {rows.map(row => <TableRow row={row} />)}
                                            </>
                                    )}
                                </SortTable>
                            </TabPanel>

                            <TabPanel>
                                <Text
                                size="heading"
                                >
                                    Rankable Table
                                </Text>

                                <RankTable
                                css={{
                                    marginY: '$4'
                                }}

                                track={["3fr", '1fr', '1fr']}
                                columns={[
                                    {
                                        'id': 'title',
                                        'name': 'Title',
                                    },{
                                        'id': 'date',
                                        'name': 'Date',
                                    }, {
                                        'id': 'author',
                                        'name': 'Author',
                                    }
                                ]}
                                onRank={rows => {
                                    setRankColumns(rows)
                                }}
                                source={rankColumns}>
                                    {(rows) => (
                                            <>
                                                <TableHeader />

                                                {rows.map(row => <TableRow key={row.id} row={row} />)}
                                            </>
                                    )}
                                </RankTable>
                            </TabPanel>
                        </TabPanels>
                    </TabContainer>
                </Grid.Item>

                <Grid.Item>
                    <Text
                    size="heading">
                        List
                    </Text>

                    <List
                    css={{
                        backgroundColor: '$white',
                        borderRadius: '$lg',
                        boxShadow: '$shallow',
                        marginTop: '$4',
                        padding: '$4 $6',
                        width: '$48'
                    }}
                    padded={true}>
                        <ListItem>
                            Item 1
                        </ListItem>

                        <ListItem>
                            Item 2
                        </ListItem>

                        <ListItem>
                            Item 3
                        </ListItem>

                        <ListItem>
                            Item 4
                        </ListItem>

                        <ListItem>
                            Item 5
                        </ListItem>
                    </List>
                </Grid.Item>

                <Grid.Item>
                    <Text
                    size="heading">
                        Images
                    </Text>

                    <Grid.Container>
                        <Grid.Item>
                            <Image
                            ratio="square"
                            size="medium"
                            style="raised"
                            rounded
                            src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" />
                        </Grid.Item>

                        <Grid.Item>
                            <Image
                            ratio="portrait"
                            size="large"
                            src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" />
                        </Grid.Item>

                        <Grid.Item>
                            <Image
                            size="xlarge"
                            ratio="landscape"
                            src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" />
                        </Grid.Item>

                    </Grid.Container>
                </Grid.Item>

                <Grid.Item>
                    <Text
                    as="h1"
                    size="title">
                        Page Title
                    </Text>

                    <Text
                    size="heading"
                    css={{
                        paddingTop: '$4'
                    }}>
                        Heading
                    </Text>

                    <Text
                    size="subheading"
                    css={{
                        paddingTop: '$4'
                    }}>
                        Subheading
                    </Text>

                    <Text
                    size="body"
                    css={{
                        maxWidth: '$xl',
                        paddingTop: '$2'
                    }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Text>

                    <Space />

                    <Text
                    size="label">
                        label
                    </Text>
                </Grid.Item>

                <Grid.Item>
                    <Checkbox 
                    checked={checked}
                    label="Checkbox"
                    onClick={() => setChecked(!checked)} />

                    <Space />

                    <Checkbox 
                    dir="rtl"
                    label="Checkbox RTL" />

                    <Space />

                    <Radio 
                    checked={radio == "1"}
                    label="Radio"
                    name="radio_input"
                    value="1"
                    onClick={value => setRadio(value)} />

                    <Space />

                    <Radio 
                    checked={radio == "2"}
                    dir="rtl"
                    label="Radio RTL"
                    name="radio_input"
                    value="2"
                    onClick={value => setRadio(value)} />
                </Grid.Item>

                <Grid.Item>
                    <Select
                    options={
                        [{
                            label: 'Option one',
                            value: 'hey'
                        }]
                    } />

                    <Space />

                    <Input 
                    label="Input"
                    type="input" />

                    <Space />

                    <Input 
                    label="Input RTL"
                    dir="rtl"
                    type="input"
                    onChange={value => setInput(value)}
                    value={input} />

                    <Space />

                    <Textarea 
                    label="Textarea" />

                    <Space />

                    <Textarea 
                    dir='rtl'
                    label="Textarea RTL" />
                </Grid.Item>

                <Grid.Item>
                <div>
                <Button
                onClick={() => setShowModal(true)}
                variant="primary">
                    Primary
                </Button>

                <Button
                size="small"
                variant="primary"
                css={{
                    marginLeft: '$1',
                }}>
                    Primary — Small
                </Button>

                <Button
                size="tiny"
                variant="primary"
                css={{
                    marginLeft: '$1',
                }}>
                    Primary — Tiny
                </Button>
            </div>

            

            <Space />

            <div>
                <Button>
                    Default
                </Button>

                <Button
                size="small"
                css={{
                    marginLeft: '$1',
                }}>
                    Default — Small
                </Button>

                <Button
                size="tiny"
                css={{
                    marginLeft: '$1',
                }}>
                    Default — Tiny
                </Button>
            </div>

            <Space />

            <div>
                <Button
                variant="warning">
                    Warning
                </Button>

                <Button
                size="small"
                variant="warning"
                css={{
                    marginLeft: '$1',
                }}>
                    Warning — Small
                </Button>

                <Button
                size="tiny"
                variant="warning"
                css={{
                    marginLeft: '$1',
                }}>
                    Warning — Tiny
                </Button>
            </div>                    
                </Grid.Item>
            </Grid.Container>


            <Modal
            dismiss={() => {
                setShowModal(false)
            }}
            title="Confirm"
            description="Are you sure you want to delete 8 items?"
            primaryAction={() => {
            }}
            variant="warning"
            visible={showModal}
            />
        </Container>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)