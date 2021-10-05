import React, {useState} from 'react'
import ReactDOM from 'react-dom'

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
    List,
    Modal, 
} from '@components/Layout'

import Text from '@components/Text'

const App = () => {
    const [showModal, setShowModal] = useState(false)
    const [radio, setRadio] = useState(1)
    const [checked, setChecked] = useState(false)
    const [input, setInput] = useState('')

    return(
        <Container>
            <List.Container
            css={{
                backgroundColor: '$white',
                borderRadius: '$lg',
                boxShadow: '$shallow',
                padding: '$4 $6',
                width: '$48'
            }}
            padded={true}>
                <List.Item>
                    Item 1
                </List.Item>

                <List.Item>
                    Item 2
                </List.Item>

                <List.Item>
                    Item 3
                </List.Item>

                <List.Item>
                    Item 4
                </List.Item>

                <List.Item>
                    Item 5
                </List.Item>
            </List.Container>

            <Space />
            
            <Image
            ratio="square"
            size="medium"
            style="raised"
            rounded
            src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" />

            <Space />

            <Image
            ratio="portrait"
            size="large"
            src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" />

            <Space />

            <Image
            size="xlarge"
            ratio="landscape"
            src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" />

            <Space />

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
            
            <Space />

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

            <Space />

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

            <Space />

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